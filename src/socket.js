// import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import io from "socket.io-client";
import Swal from "sweetalert2";

export const socket = io("http://localhost:8080");

export const gameActions = [];

socket.on("lobby", () => {
  console.log("Connected to server, welcome!");
});

export class ClientSocket {
  entirePage;
  socket;

  constructor(entirePage, socket) {
    this.entirePage = entirePage;
    this.socket = socket;
    this.setupSocketListeners();
  }

  setupSocketListeners() {
    socket.on("game:open", (arg, callback) => {
      //game session opened (대기시간 1분)
      let timerInterval;
      var ifParticipate = false;
      Swal.fire({
        title: "게임에 참여하시겠습니까?",
        html: "<b></b> 초 후에 창이 닫힙니다.",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: "참가",
        cancelButtonText: "참가하지 않음",
        didOpen: () => {
          const timer = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.isConfirmed) {
          callback("yes");
          ifParticipate = true;
        }
      });
      if (ifParticipate) {
        let timerInterval;
        Swal.fire({
          title: "게임 준비중",
          html: "게임이 <b></b> 안에 시작합니다.",
          timer: 15000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            this.entirePage.convertToGame();
          }
        });
      }
    });

    socket.on("game:start", (data) => {
      //game started
      console.log(data);
      //this.entirePage.startGame(data); // `startGame` 메서드 호출
    });

    socket.on("game:over", (data) => {
      //점수계산 Loading창 띄우고 convertToBasic
    });
  }
}
