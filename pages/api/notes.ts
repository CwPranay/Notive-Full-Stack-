import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/db';
import Note, { INote } from '@/models/note';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  // POST: Create a note
  if (req.method === 'POST') {
    try {
      const { deviceId,  content } = req.body;

      if (!deviceId)  {
        return res.status(400).json({ error: 'deviceId are required' });
      }

      const newNote: INote = new Note({
        deviceId,
        
        content,
        createdAt: new Date(),
        
      });

      const savedNote = await newNote.save();
      return res.status(201).json(savedNote);
    } catch (error) {
      console.error('Error creating note:', error);
      return res.status(500).json({ error: 'Failed to create note' });
    }
  }

  // GET: Fetch notes
  if (req.method === 'GET') {
    try {
      const { deviceId } = req.query;

      if (!deviceId || typeof deviceId !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing deviceId' });
      }

      const notesList = await Note.find({ deviceId }).sort({ createdAt: -1 });
      return res.status(200).json(notesList);
    } catch (error) {
      console.error('Error fetching notes:', error);
      return res.status(500).json({ error: 'Failed to fetch notes' });
    }
  }

  // DELETE: Delete note by ID
  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing note ID' });
      }

      const deletedNote = await Note.findByIdAndDelete(id);

      if (!deletedNote) {
        return res.status(404).json({ error: 'Note not found' });
      }

      return res.status(200).json({ message: 'Note deleted', deletedNote });
    } catch (error) {
      console.error('Error deleting note:', error);
      return res.status(500).json({ error: 'Failed to delete note' });
    }
  }

  // Unsupported method
  return res.status(405).json({ error: 'Method Not Allowed' });
}
