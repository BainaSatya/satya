
function progressBar() {
  let circularProgress = document.querySelector(".circular-progress");
  let progressValue = document.querySelector(".progress-value");

  let parallelProgress = document.querySelector(".parallel-progress");
  let parallelValue = document.querySelector(".parallel-value");

  let button = document.getElementById("button");
  let popup = document.getElementById("popup");
  let done = document.getElementById("done");

  button.addEventListener("click", () => {
    let progressStartValue = 0,
      progressEndValue = 100,
      speed = 100;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent =
        parallelValue.textContent = `${progressStartValue}%`;

      circularProgress.style.background = `conic-gradient(
  green ${progressStartValue * 3.6}deg,
  #ededed ${progressStartValue * 3.6}deg
  )`;

      parallelProgress.style.width = `${progressStartValue}%`;
      parallelProgress.style.background = "#000080";
      parallelProgress.style.color = "white";

      popup.style.cssText = "display:none";

      if (progressStartValue == progressEndValue) {
        clearInterval(progress);

        setTimeout(() => {
          popup.style.cssText =
            "position: absolute;\
        bottom:50px;\
        width:32.5%;\
        height:160px;\
        background-color: white;\
        padding: 40px 0px;\
        border-radius: 10px;\
        display: flex;\
        justify-content: center;\
        align-items: center;\
        flex-direction: column;\
        gap:20px;\
        ";
        });

        let body = document.getElementById("body");
        let success = document.getElementById("success");

        let cup1 = document.getElementById("cup1");
        let cup2 = document.getElementById("cup2");
        let cup3 = document.getElementById("cup3");
        let cup4 = document.getElementById("cup4");

        document.body.style.backgroundImage = "url('../design/congrates.gif')";
        success.style.cssText = "display : block;";
        cup1.style.cssText =
          cup2.style.cssText =
          cup3.style.cssText =
          cup4.style.cssText =
            "display : block;";

        done.addEventListener("click", () => {
          popup.style.cssText = "display:none";
          parallelProgress.style.background = "#ededed";
          parallelProgress.style.color = "black";
          let progressStartValue = 0;
          progressValue.textContent =
            parallelValue.textContent = `${progressStartValue}%`;

          circularProgress.style.background = "#ededed";
          body.style.background = "none";
          success.style.cssText = "display : none;";
          cup1.style.cssText =
            cup2.style.cssText =
            cup3.style.cssText =
            cup4.style.cssText =
              "display : none;";
        });
      }
    }, speed);
  });
}

progressBar();

body.addEventListener("mousemove", change);

function change() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    var result = Math.floor(Math.random() * 16);
    color = color + letters[result];
  }
  document.body.style.backgroundColor = color;
  console.log(color);
}
change()

// *****************************************************************
