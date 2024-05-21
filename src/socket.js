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
      // 게임 세션 열림 (대기 시간 1분)
      let timerInterval;
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

          Swal.fire({
            title: "게임 준비중",
            html: "게임이 <b></b> 초 내에 시작합니다.",
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              // 게임 시작
              this.entirePage.convertToGame();
            }
          });

          // 게임 시작 신호가 오면 SweetAlert을 닫고 게임 시작
          socket.once("game:start", (data) => {
            Swal.close(); // SweetAlert 닫기
            this.entirePage.convertToGame(); // 게임 시작
          });
        }
      });
    });

    socket.on("game:over", (data) => {
      // 점수 계산 로딩 창 띄우고 convertToBasic
    });
  }
}
