function myFunction() {
  var x = document.getElementById("menu");
  var y = document.getElementById("js-top");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.top = "inherit";
  } else {
    x.style.display = "block";
    y.style.top = "84vh";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }
}