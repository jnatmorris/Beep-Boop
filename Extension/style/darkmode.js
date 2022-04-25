// set extension theme
const handleThemeChange = (isDark) => {
    document.documentElement.classList.add(isDark === "dark" ? "dark" : "");
};

// detect on load if in dark mode
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    handleThemeChange("dark");
}

// detect when theme on OS changes
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "";
        handleThemeChange(newColorScheme);
    });
