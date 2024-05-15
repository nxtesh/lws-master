import express, { json } from "express";
import cors from "cors";
import axios from "axios";
const app = express();

import User from "./models/user.model.js";
import cookieParser from "cookie-parser";
app.use(cookieParser());
app.use(json());
app.use(cors({ origin: true }));
app.use(express.json());
import http from "http";
const server = http.createServer(app);
import mongoose from "mongoose";
import { Server } from "socket.io";

mongoose
  .connect(
    "mongodb+srv://nitesh2003y:nitesh2003yy@cluster0.w4gylth.mongodb.net/lws?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((data) => {
    console.log(`connected to database`);
  });

// socket.io setup

const io = new Server(server, {
  // option object
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//signup
app.post("/user/signup", async (req, res) => {
  const { username, password } = req.body;
  const isExists = await User.findOne({ username });
  if (isExists)
    return res
      .status(400)
      .json({ status: 400, message: "User already exists" });

  const user = await new User({ username, password }).save();
  console.log(user);
  res.status(200).json({ status: 200, message: "User created Successfully" });
});
//login
app.post("/user/login", async (req, res) => {
  const { username, password } = req.body;
  const isExists = await User.findOne({ username });
  if (!isExists)
    return res
      .status(400)
      .json({ status: 400, message: "User doesn't exists" });
  res.cookie("username", username);
  res.status(200).json({ status: 200, message: "User logged in Successfully" });
});
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "b3a8cd81-81aa-452c-8ab5-7140b7f1fb1b" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// video connection
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(3001, () => {
  console.log("Server is Running");
});
