let openedMenuBar = false;
let openedShoppingBar = false;
let openedAccountMenu = true;
let openedProductMenu = true;

let sideAdminOpts = {
    acc: [
        "menu-registration-search-account",
        "menu-registration-new-account",
        "menu-registration-edit-account",
        "menu-registration-transactions"
    ],
    prod: [
        "menu-registration-product",
        "menu-registration-search-product",
        "menu-registration-new-product",
        "menu-registration-edit-product"
    ]
};

let sideUserOpts = {
    acc: [
        "menu-registration-new-account",
        "menu-registration-edit-account",
        "menu-registration-transactions"
    ],
    prod: [
        "menu-registration-search-product",
        "menu-registration-new-product"
    ]
};

let sideOffOpts = {
    acc: ["menu-registration-new-account"],
    prod: ["menu-registration-search-product"]
};

let opts = (flagUser) ? (flagAdmin) ? sideAdminOpts : sideUserOpts : sideOffOpts;


function sideGeneralMenu() {
    if (openedMenuBar == false) {
        let generalMenuBar = document.getElementById('general-menu-bar');
        generalMenuBar.classList.remove('hidden');
        let shoppingCartBar = document.getElementById('shopping-cart-bar');
        shoppingCartBar.classList.add('hidden');
        let menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-chevron-circle-up');
        return openedMenuBar = true;  
    } else {
        let generalMenuBar = document.getElementById('general-menu-bar');
        generalMenuBar.classList.add('hidden');
        let menuIcon = document.querySelector('.menu-icon');
        menuIcon.classList.remove('fa-chevron-circle-up');
        menuIcon.classList.add('fa-bars');
        return openedMenuBar = false;   
    };
};

function sideMyShoppingCart() {
    if (openedShoppingBar == false) {
        let shoppingCartBar = document.getElementById('shopping-cart-bar');
        shoppingCartBar.classList.remove('hidden');
        let generalMenuBar = document.getElementById('general-menu-bar');
        generalMenuBar.classList.add('hidden');
        let shoppingCartIcon = document.querySelector('.shopping-cart-icon');
        shoppingCartIcon.classList.remove('fa-shopping-cart');
        shoppingCartIcon.classList.add('fa-chevron-circle-up');
        return openedShoppingBar = true;  
    } else {
        let shoppingCartBar = document.getElementById('shopping-cart-bar');
        shoppingCartBar.classList.add('hidden');
        let shoppingCartIcon = document.querySelector('.shopping-cart-icon');
        shoppingCartIcon.classList.remove('fa-chevron-circle-up');
        shoppingCartIcon.classList.add('fa-shopping-cart');
        return openedShoppingBar = false;   
    };
};

function accountMenuOptions() {
    if (openedAccountMenu == false) {
        opts.acc.forEach(id => document.getElementById(id).classList.remove('hidden'));
        let upDownIcon = document.querySelector('.up-down-icon1');
        upDownIcon.classList.remove('fa-chevron-circle-down');
        upDownIcon.classList.add('fa-chevron-circle-up');
        return openedAccountMenu = true;   
    } else {
        opts.acc.forEach(id => document.getElementById(id).classList.add('hidden'));
        let upDownIcon = document.querySelector('.up-down-icon1');
        upDownIcon.classList.remove('fa-chevron-circle-up');
        upDownIcon.classList.add('fa-chevron-circle-down');
        return openedAccountMenu = false;    
    };
};

function productMenuOptions() {
    if (openedProductMenu == false) {
        opts.prod.forEach(id => document.getElementById(id).classList.remove('hidden'));
        let upDownIcon = document.querySelector('.up-down-icon2');
        upDownIcon.classList.remove('fa-chevron-circle-down');
        upDownIcon.classList.add('fa-chevron-circle-up');
        return openedProductMenu = true;
    } else {
        opts.prod.forEach(id => document.getElementById(id).classList.add('hidden'));
        let upDownIcon = document.querySelector('.up-down-icon2');
        upDownIcon.classList.remove('fa-chevron-circle-up');
        upDownIcon.classList.add('fa-chevron-circle-down');
        return openedProductMenu = false;      
    };
};

function showSearchPageToEditAccount() {
    let searchAccountEditSection = document.getElementById('search-account-edit-section');
    let accountEditSection = document.getElementById('account-edit-section');
    searchAccountEditSection.classList.remove('hidden');
    accountEditSection.classList.add('hidden');
    clearInputFieldsOnScreen();
};

function showAccountPageToEdit() {
    let searchAccountEditSection = document.getElementById('search-account-edit-section');
    let accountEditSection = document.getElementById('account-edit-section');
    searchAccountEditSection.classList.add('hidden');
    accountEditSection.classList.remove('hidden');
};

function showSearchPageToEditProduct() {
    let searchProductEditSection = document.getElementById('search-product-edit-section');
    let productEditSection = document.getElementById('product-edit-section');
    searchProductEditSection.classList.remove('hidden');
    productEditSection.classList.add('hidden');
};

function showProductPageToEdit() {
    let searchProductEditSection = document.getElementById('search-product-edit-section');
    let productEditSection = document.getElementById('product-edit-section');
    searchProductEditSection.classList.add('hidden');
    productEditSection.classList.remove('hidden');
};