import mongoose, { Document, Schema } from "mongoose";

export interface INote extends Document {
  deviceId: string;
  content?: string;
  createdAt: Date;
}

const noteSchema: Schema = new Schema<INote>({
  deviceId: { type: String, required: true },
  content: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.note || mongoose.model<INote>("note", noteSchema);
