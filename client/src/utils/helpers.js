export const handleCartDropdown = (isHidden, hideCart) => {
    if (!isHidden) {
        hideCart();
    }
};

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const handleNoHover = () => {
    if ("ontouchstart" in document.documentElement) {
        const page = document.querySelector('.collection-list');
        if (page) page.className += " no-hover";
    }
};

export const onPageNav = (isHidden, hideCart) => {
    handleCartDropdown(isHidden, hideCart);
    scrollToTop();
};
