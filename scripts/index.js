const btn = document.getElementById("open-btn");
const modal = document.getElementById("modal");
const closed = document.getElementById("close");
btn.addEventListener("click", () => modal.classList.add("open"));
closed.addEventListener("click", () => modal.classList.remove("open"));
