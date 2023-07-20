import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    servers: [],
    isConfirmed: Boolean,
    confirmationToken: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);