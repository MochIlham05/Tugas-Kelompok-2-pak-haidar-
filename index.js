let lastScrollTop = 0; // simpan posisi scroll terakhir
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // scroll ke bawah -> sembunyikan navbar
    navbar.classList.add("hidden");
    } else {
    // scroll ke atas -> munculkan navbar
    navbar.classList.remove("hidden");
    }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // biar tidak negatif
});
