const colorScheme = document.getElementById("colorScheme");

colorScheme.addEventListener("change", (Event) => {
  localStorage.setItem("color-scheme", Event.target.value);
});

window.addEventListener("load", (Event) => {
  const scheme = localStorage.getItem("color-scheme") || "auto";
  const selected = [...colorScheme.elements].filter(
    (element) => element.value === scheme
  );
  if (scheme) {
    document.documentElement.style.setProperty("--darkmode", scheme);
    if (selected) selected[0].checked = true;
  }
});
