import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordMatch = await bcrypt.compare(password, user.password || "");

    if (!user || !isPasswordMatch) {
      return res
        .status(400)
        .json({ error: "Geçersiz kullanıcı adı veya hatalı şifre" });
    }
    generateTokenAndCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Sorun Loginde", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Şifreler eşleşmiyor!" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ error: "Bu kullanıcı adı zaten kullanılmaktadır" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Sorun Burada", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log("Sorun Logoutta", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
