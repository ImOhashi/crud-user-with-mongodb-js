import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  cpf: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
