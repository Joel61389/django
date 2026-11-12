document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) window.lucide.createIcons();

    const searchInput = document.querySelector("[data-directory-search]");
    const rows = [...document.querySelectorAll("[data-person-row]")];
    const visibleCount = document.querySelector("[data-visible-count]");
    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLocaleLowerCase();
        let visible = 0;
        rows.forEach((row) => {
            const matches = row.dataset.search.includes(query);
            row.hidden = !matches;
            if (matches) visible += 1;
        });
        if (visibleCount) visibleCount.textContent = visible;
    });
});