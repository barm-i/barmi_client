import Swal from "sweetalert2";

export const gameActions = [];

export class ClientSocket {
  entirePage;
  socket;

  constructor(entirePage, socket) {
    this.entirePage = entirePage;
    this.socket = socket;
    this.setupSocketListeners();
  }

  setupSocketListeners() {
    this.socket.on("lobby", () => {
      console.log("Connected to server, welcome!");
    });
    this.socket.on("game:open", (arg, callback) => {
      // 게임 세션 열림 (대기 시간 1분)
      console.log("arg from server: ", arg);

      let remainTime = Number(arg);
      let decTime = setInterval(() => {
        remainTime -= 100;
      }, 100);

      let timerInterval;
      Swal.fire({
        title: "게임에 참여하시겠습니까?",
        html: "<b></b> 초 후에 창이 닫힙니다.",
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "참가",
        cancelButtonText: "거절",
        heightAuto: false,
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
            timer: remainTime,
            allowOutsideClick: false,
            timerProgressBar: true,
            heightAuto: false,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = Math.ceil(remainTime / 1000);
              }, 100);
            },
            willClose: () => {
              clearInterval(decTime);
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              // 게임 시작
              this.entirePage.convertToGame();
            }
          });

          // 게임 시작 신호가 오면 SweetAlert을 닫고 게임 시작
          this.socket.once("game:start", (data) => {
            Swal.close(); // SweetAlert 닫기
            this.entirePage.convertToGame(); // 게임 시작
          });
        } else if (result.isDenied) {
          callback("no");
        }
      });
    });
    //TODO game participants
    this.socket.on("game:end", (data) => {
      let timerInterval;
      Swal.fire({
        title: "점수 계산중!",
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: false,
        heightAuto: false,
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
          this.entirePage.convertToCanvasBasic();
        }
      });
    });
    //TODO Not game participants
    this.socket.on("game:update", (data) => {
      this.entirePage.leftContainer.leaderBoardComponent.fetchAndUpdateLeaderboard();
    });
  }
}
