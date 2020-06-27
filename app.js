var inp = document.querySelector(".cli input");

var btn = document.querySelector("#numPad");
btn.addEventListener("click", function (e) {
  var cliInp = inp.value;
  var cliSign = inp.value.slice(-1);
  if (
    e.target.textContent.charCodeAt() >= 48 &&
    e.target.textContent.charCodeAt() <= 57
  ) {
    inp.value += e.target.textContent;
  } else if (
    e.target.textContent.charCodeAt() === 47 ||
    (e.target.textContent.charCodeAt() >= 42 &&
      e.target.textContent.charCodeAt() <= 46)
  ) {
    if (
      cliInp.slice(-1).charCodeAt() === 47 ||
      (cliInp.slice(-1).charCodeAt() >= 42 &&
        cliInp.slice(-1).charCodeAt() <= 45)
    ) {
      switch (cliInp.slice(-1)) {
        case "+":
          cliSign = cliSign.replace(/\+/, e.target.textContent);
          inp.value = cliInp.slice(0, length - 1) + cliSign;
          break;
        case "-":
          cliSign = cliSign.replace(/\-/, e.target.textContent);
          inp.value = cliInp.slice(0, length - 1) + cliSign;
          break;
        case "/":
          cliSign = cliSign.replace(/\//, e.target.textContent);
          inp.value = cliInp.slice(0, length - 1) + cliSign;
          break;
        case "*":
          cliSign = cliSign.replace(/\*/, e.target.textContent);
          inp.value = cliInp.slice(0, length - 1) + cliSign;
          break;
        default:
          console.log("default");
      }
    } else {
      inp.value += e.target.textContent;
    }
  }
});

var cls = document.querySelector(".cls");
cls.addEventListener("click", function (e) {
  inp.value = "";
});

var bck = document.querySelector(".bck");
bck.addEventListener("click", function (e) {
  inp.value = inp.value.slice(0, -1);
});



var cliEval = document.querySelector(".eval");
cliEval.addEventListener("click", function (e) {
  inp.value = eval(inp.value);
});
