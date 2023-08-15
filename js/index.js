console.log(window.scrollY);

let bar = document.querySelector(".bar");
let asideP = document.querySelector(".phone")
bar.addEventListener("click", function () {
  if (asideP.style.left !== "0px") {
  asideP.style.left = "0px"
  asideP.style.width = "100%"
  } else {
  asideP.style.left = "-200px";
  }
})
document.querySelector(".close").addEventListener("click", () => {
  if (asideP.style.left !== "-200px") {
    asideP.style.left = "-200px"
    asideP.style.width = "0px"
    } else {
    asideP.style.left = "0px";
    }
})