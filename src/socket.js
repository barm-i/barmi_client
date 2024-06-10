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

    this.socket.on("game:end", (data) => {
      console.log(data);
      console.log(data);

      // data.deltaScores 배열을 추출
      const deltaScores = data.deltaScores;

      // window.localStorage에서 사용자 이름 가져오기
      const username = window.localStorage.getItem("username");

      // deltaScores 배열에서 해당 사용자 이름에 맞는 점수를 찾기
      const userData = deltaScores.find((user) => user.username === username);
      let timerInterval;
      Swal.fire({
        title: "점수 계산중!",
        timer: 5000,
        timerProgressBar: true,
        allowOutsideClick: false,
        heightAuto: false,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          this.entirePage.convertToCanvasBasicForce();
        }
      });
    });
    // this.socket.on("game:end", (data) => {
    //   console.log("game end");
    // console.log(data);

    // // data.deltaScores 배열을 추출
    // const deltaScores = data.deltaScores;

    // // window.localStorage에서 사용자 이름 가져오기
    // const username = window.localStorage.getItem("username");

    // // deltaScores 배열에서 해당 사용자 이름에 맞는 점수를 찾기
    // const userData = deltaScores.find((user) => user.username === username);

    //   if (userData) {
    //     const points = userData.deltaScore; // 해당 사용자에 대한 점수
    //     let currentPoints = 0;
    //     let timerInterval;
    //     Swal.fire({
    //       title: "점수 계산중!",
    //       html: `+<b>${currentPoints}</b>점`,
    //       timer: 5000, // 타이머를 5초로 설정
    //       timerProgressBar: true,
    //       allowOutsideClick: false,
    //       heightAuto: false,
    //       didOpen: () => {
    //         Swal.showLoading();
    //         const increment = points / 100; // 점수를 100단계로 나누기
    //         timerInterval = setInterval(() => {
    //           currentPoints += increment; // 증가분 만큼 점수 증가
    //           if (currentPoints >= points) {
    //             currentPoints = points; // 최종 점수에 도달하면 종료
    //           }
    //           Swal.getHtmlContainer().querySelector("b").textContent =
    //             Math.floor(currentPoints);
    //         }, 50); // 50ms마다 업데이트
    //       },
    //       willClose: () => {
    //         // 타이머가 닫힐 때 인터벌 해제
    //         clearInterval(timerInterval);
    //       },
    //     }).then((result) => {
    //       if (result.dismiss === Swal.DismissReason.timer) {
    //         this.entirePage.convertToCanvasBasicForce();
    //       }
    //     });
    //   } else {
    //     console.log("해당 사용자에 대한 점수를 찾을 수 없습니다.");
    //   }
    // });

    this.socket.on("game:update", (data) => {
      this.entirePage.leftElement.leaderBoardComponent.fetchAndUpdateLeaderboard();
    });
  }
}
