// ==========================================================================
// admin.digital -- custom scripts
// ==========================================================================

// 1. Mark image-only paragraphs with the .img-only class so CSS can let
//    them stretch to full width while regular text stays at 67ex.

document.querySelectorAll('article p').forEach(function (p) {
    if (p.querySelector('img') === null) {
        return;
    }
    if (p.innerText.trim() !== '') {
        return;
    }
    p.classList.add('img-only');
});

// 2. Make the header title clickable -- navigates to the site root.

(function () {
    var title = document.querySelector('.md-header__title');
    if (title) {
        title.style.cursor = 'pointer';
        title.addEventListener('click', function () {
            window.location = '/';
        });
    }
})();
