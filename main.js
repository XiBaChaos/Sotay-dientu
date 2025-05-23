
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});

function searchNotes(page) {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".accordion .item");
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "block" : "none";
  });
}
