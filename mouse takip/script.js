const bebekler = document.getElementsByClassName("gbebek");
document.onmousemove = function(event) {
  const x = event.clientX * 100 / window.innerWidth + "%";
  const y = event.clientY * 100 / window.innerHeight + "%";

  for (let i = 0; i < bebekler.length; i++) {
    bebekler[i].style.top = y;
    bebekler[i].style.left = x;
    bebekler[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
};