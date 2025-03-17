// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    if (!menuButton || !menu) return;

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
        menuButton.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove("show");
            menuButton.classList.remove("active");
        }
    });
});

