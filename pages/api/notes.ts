import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import Note from "@/models/note";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  // GET: Fetch notes by deviceId
 if (req.method === "GET") {
  const { deviceId } = req.query;

  if (!deviceId || typeof deviceId !== "string") {
    return res.status(400).json({ error: "Missing or invalid deviceId" });
  }

  try {
    const notes = await Note.find({ deviceId });

    const mappedNotes = notes.map(note => ({
      ...note.toObject(),
      id: note._id.toString(),
    }));

    return res.status(200).json(mappedNotes);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch notes" });
  }
}


  // POST: Create a new empty note
 if (req.method === "POST") {
  const { deviceId, color } = req.body;

  if (!deviceId) {
    return res.status(400).json({ error: "Missing deviceId" });
  }

  try {
    const newNote = await Note.create({
      deviceId,
      content: "",          // always empty at creation
      color: color || "",   // optional
      createdAt: new Date(),
    });

    const formattedNote = {
      ...newNote.toObject(),
      id: newNote._id.toString(),
    };

    return res.status(201).json(formattedNote);
  } catch (err) {
    return res.status(500).json({ error: "Failed to create note" });
  }
}


  // PUT: Update a note's content
  if (req.method === "PUT") {
  const { noteId, content } = req.body;

  if (!noteId || typeof noteId !== "string") {
    return res.status(400).json({ error: "Missing or invalid noteId" });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    const formattedNote = {
      ...updatedNote.toObject(),
      id: updatedNote._id.toString(),
    };

    return res.status(200).json(formattedNote);
  } catch (err) {
    return res.status(500).json({ error: "Failed to update note" });
  }
}

if (req.method === "DELETE") {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Missing or invalid noteId" });
  }

  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    return res.status(200).json({ message: "Note deleted successfully", id: id });
    console.log("Deleting note:", id);
  } catch (err) {
    return res.status(500).json({ error: "Failed to delete note" });
  }

}


  return res.status(405).json({ error: "Method not allowed" });
}
