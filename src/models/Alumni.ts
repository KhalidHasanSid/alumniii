import mongoose from 'mongoose';

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  studentID: { type: String, required: true }
});

const Alumni = mongoose.models.Alumni || mongoose.model('Alumni', alumniSchema);
console.log(Alumni)
export default Alumni;
