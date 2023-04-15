const toggle = document.querySelector(".dark-toggle");
let theme = localStorage.getItem("theme");
const body = document.querySelector("body");

const Theme = {
    DARK: "dark",
    LIGHT: "light"
};

if (theme === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = Theme.DARK;
    } else {
        theme = Theme.LIGHT;
    }
}

if (theme === Theme.DARK) {
    if (!body.classList.contains(Theme.DARK)) {
        body.classList.add(Theme.DARK);
    }
}

toggle.addEventListener("click", (event) => {
    if (body.classList.toggle(Theme.DARK)) {
        localStorage.setItem("theme", Theme.DARK);
    }
    else {
        localStorage.setItem("theme", Theme.LIGHT);
    }
});