import dbConnect from "../../../database/connect";
import User from "../../../database/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Validator from "../../../components/Validator";

export default async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      let { username, email, password, confirmpassword } = body;

      const validation = Validator(body);
      if (validation) return res.status(400).json({ message: validation });

      // password hash
      password = await bcrypt.hash(password, 12);
      confirmpassword = await bcrypt.hash(confirmpassword, 12);

      const registerUser = await User.create({
        username,
        email,
        password,
        confirmpassword,
      });

      const userid = await User.findOne({ email: email });

      const token = jwt.sign({ id: userid._id }, process.env.NEXT_AUTH_SECRET);

      //   delete password and confirmpassword and send as response
      userid.password = undefined;
      userid.confirmpassword = undefined;

      res.status(200).json({ ...userid, token });
    } catch (err) {
      res.status(404).json({ message: 'Email Id Already Exists' });
    }
  }
}
