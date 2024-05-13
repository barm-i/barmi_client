import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
// import io from "socket.io-client";

export const socket = io("http://localhost:8080");

socket.on("lobby", () => {
  console.log("Connected to server, welcome!");
});

socket.on("game:open", (arg, callback) => {
  const res = alert("게임이 시작될 예정입니다. 참여하시겠습니까?"); // TODO : frontend logic

  callback("yes");
});

socket.on("game:start", (data) => {
  console.log(data);
});
