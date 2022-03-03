import dbConnect from "../../../database/connect";
import User from "../../../database/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  const { body, method } = req;

  if (method === "POST") {
    const { email, password } = body;

    const finduser = await User.findOne({ email });

    if (!finduser) return res.status(404).json({ message: "Invalid Credentials" });

    const matchPassword = await bcrypt.compare(password, finduser.password);
    if (!matchPassword) return res.status(404).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: finduser._id }, process.env.NEXT_AUTH_SECRET);
    finduser.password = undefined;
    finduser.confirmpassword = undefined;

    res.status(200).json({ ...finduser, token });
  }
}
