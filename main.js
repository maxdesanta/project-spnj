const dropdownToggle = document.getElementById('dropdown-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropTitle = document.getElementById('dropdown-title-sort');
const sortItems = document.querySelectorAll(".cursor-pointer[id^='item-sort']");

// sort function
dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

sortItems.forEach(function(item) {
    item.addEventListener("click", function() {
    const sortText = this.textContent.trim();
    document.getElementById("dropdown-title-sort").textContent = sortText;
    dropdownMenu.classList.add("hidden");
    });
});

// menu change mobile
function Menu(e) {
  let list = document.querySelector("nav");

  e.name === "menu" ? (e.name = "close", list.classList.add("top-[40px]"), list.classList.add("opacity-100")) : (e.name = "menu", list.classList.remove("top-[40px]"), list.classList.remove("opacity-100"));
}