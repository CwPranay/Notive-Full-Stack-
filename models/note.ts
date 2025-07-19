import mongoose, { Schema, Document } from "mongoose";

export interface INote extends Document {
  deviceId: string;
  content?: string;
  color?: string;
  createdAt: Date;
}

const noteSchema: Schema = new Schema<INote>({
  deviceId: { type: String, required: true },
  content: { type: String, default: "" },
  color: { type: String, default: "bg-white" },
  createdAt: { type: Date, default: Date.now },
});

// prevent model overwrite error in development
const Note = mongoose.models.Note || mongoose.model<INote>("Note", noteSchema);
export default Note;
