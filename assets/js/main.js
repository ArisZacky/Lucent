// NAVBAR SCROLL BACKGROUND CHANGE
const nav = document.getElementById("header");
const menuList = document.getElementsByClassName("menu-list");
window.addEventListener('scroll', () =>{
    if (window.scrollY >= 72){
        nav.classList.add('header-scrolled');
        for(var i = 0; i < menuList.length; i++){
            menuList[i].classList.add('menu-list-scrolled');
        }
    } else if(window.scrollY <= 72){
        nav.classList.remove('header-scrolled');
        for(var i = 0; i < menuList.length; i++){
            menuList[i].classList.remove('menu-list-scrolled');
        }
    }
})

// MENU
const btn = document.getElementById("menu");
const menuNav = document.getElementById('menu-nav');
const btnclose = document.getElementById("close");

btn.addEventListener("click", () => {
    menuNav.classList.add("show");
    btn.style.display = 'none';
    btnclose.style.display = 'block';
    nav.classList.add('header-opened');
    for(var i = 0; i < menuList.length; i++){
        menuList[i].classList.add('menu-opened');
    }
})
btnclose.addEventListener("click", () => {
    menuNav.classList.remove("show");
    btn.style.display = 'block';
    btnclose.style.display = 'none';
    nav.classList.remove('header-opened');
    for(var i = 0; i < menuList.length; i++){
        menuList[i].classList.remove('menu-opened');
    }
})



/*==================== SORT DROPDOWN ====================*/
// const sort = document.getElementById("sort");
// const dropdownContent = document.getElementById('dropdown-content');
// const btnCloseDropdown = document.getElementById("close-alert");

// sort.addEventListener("click", () => {
//     dropdownContent.classList.add('show-dropdown');
// })

/*==================== ALERT ====================*/
const btnAddCart = document.getElementById("add-to-cart-button");
const alertContent = document.getElementById('alert-content');
const btnCloseAlert = document.getElementById("close-alert");

btnAddCart.addEventListener("click", () => {
    alertContent.classList.add('show-alert');
})
btnCloseAlert.addEventListener("click", () => {
    alertContent.classList.remove('show-alert');
})