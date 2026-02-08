window.addEventListener("scroll", function () {
  // بنختار العنصر اللي واخد كلاس header
  const header = document.querySelector(".js");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
