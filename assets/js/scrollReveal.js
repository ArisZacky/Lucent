/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(` .footer-container, .product-list, .hero-container, .new-release-container, .stories-container, 
            .tab-container, .swiper, .social-media-container, .detail-product-container, .cart, .stories-page-container, .founder-container`, 
{
    interval: 200
})