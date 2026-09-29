// Menu Hamburger
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("show");
});
// Dark/Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});
// Lọc sách
const filterButtons =
    document.querySelectorAll(".filter-buttons button");

const projects =
    document.querySelectorAll(".project");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const filter = button.dataset.filter;

        projects.forEach(function(project) {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

    });

});
// Tìm kiếm sách
const search =
    document.getElementById("searchProject");

search.addEventListener("input", function() {

    const keyword = search.value.toLowerCase();

    projects.forEach(function(project) {

        const text =
            project.innerText.toLowerCase();

        if (text.includes(keyword)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

});
// Validate form
const form =
    document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const formMessage =
        document.getElementById("formMessage");


    if (name === "") {

        formMessage.textContent =
            "Vui lòng nhập họ tên.";

        return;
    }


    if (email === "") {

        formMessage.textContent =
            "Vui lòng nhập email.";

        return;
    }


    if (!email.includes("@")) {

        formMessage.textContent =
            "Email không hợp lệ.";

        return;
    }


    if (message.length < 10) {

        formMessage.textContent =
            "Nội dung phải có ít nhất 10 ký tự.";

        return;
    }


    formMessage.textContent =
        "Gửi liên hệ thành công!";

});
// Đếm kí tự
const message =
    document.getElementById("message");

const charCount =
    document.getElementById("charCount");

message.addEventListener("input", function() {

    charCount.textContent =
        message.value.length + "/500 ký tự";

});

// Khai báo các biến để lưu trữ các phần tử menu và các phần tử section
const menuItems = document.querySelectorAll(".menu a, .hero a[data-section]");
const sections = document.querySelectorAll("section");

function showSection(sectionId) {
    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add("active");
    }
}

// Cho trang chủ hiện ngay khi mở web
document.getElementById("home").classList.add("active");

// Ẩn, hiện các section khi click vào menu hoặc nút "Xem dự án"
menuItems.forEach(function(item) {

    item.addEventListener("click", function(event) {

        event.preventDefault();

        const sectionId = item.dataset.section;
        if (sectionId) {
            showSection(sectionId);
        }
    });

});
// Khai báo biến để lưu trữ phần tử hiển thị năm hiện tại
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();