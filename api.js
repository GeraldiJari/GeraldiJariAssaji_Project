document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://suitmedia-backend.suitdev.com/api/ideas';
    const params = {
        page: { number: 1, size: 10 },
        append: ['small_image', 'medium_image'],
        sort: '-published_at'
    };
});
