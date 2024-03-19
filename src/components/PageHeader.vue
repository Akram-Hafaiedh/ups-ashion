<template>
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__close">+</div>
        <ul class="offcanvas__widget">
            <li @click="openSearch"><span class="icon_search search-switch"></span></li>
            <li><a href="#"><span class="icon_heart_alt"></span>
                    <div class="tip">2</div>
                </a></li>
            <li><a href="#"><span class="icon_bag_alt"></span>
                    <div class="tip">2</div>
                </a></li>
        </ul>
        <div class="offcanvas__logo">
            <router-link to="/"><img src="img/logo.png" alt=""></router-link>
            <!-- <a href="./index.html"><img src="img/logo.png" alt=""></a> -->
        </div>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__auth">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
            <!-- <a href="#">Login</a> -->
            <!-- <a href="#">Register</a> -->
        </div>
    </div>
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-2">
                    <div class="header__logo">
                        <router-link to="/"><img src="/img/logo.png" alt="" /></router-link>
                        <!-- <a href="./index.html"><img src="img/logo.png" alt="" /></a> -->
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                    <nav class="header__menu">
                        <ul>
                            <li class="active"><router-link to="/">Home</router-link></li>
                            <!-- <li class="active"><a href="./index.html">Home</a></li> -->
                            <li><a href="#">Women’s</a></li>
                            <li><a href="#">Men’s</a></li>
                            <li><router-link to="/shop">Shop</router-link></li>
                            <!-- <li><a href="./shop.html">Shop</a></li> -->
                            <li>
                                <a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><router-link to="/product-details">Product Details</router-link></li>
                                    <!-- <li><a href="./product-details.html">Product Details</a></li> -->
                                    <!-- <li><router-link to="/cart">Shop Cart</router-link></li> -->
                                    <!-- <li><a href="./shop-cart.html">Shop Cart</a></li> -->
                                    <!-- <li><router-link to="/checkout">Checkout</router-link></li> -->
                                    <!-- <li><a href="./checkout.html">Checkout</a></li> -->
                                    <li><router-link to="/blog-details">Blog Details</router-link></li>
                                    <!-- <li><a href="./blog-details.html">Blog Details</a></li> -->
                                </ul>
                            </li>
                            <li><router-link to="/blog">Blog</router-link></li>
                            <!-- <li><a href="./blog.html">Blog</a></li> -->
                            <li><router-link to="/contact">Contact</router-link></li>
                            <!-- <li><a href="./contact.html">Contact</a></li> -->
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__right">
                        <div class="header__right__auth">
                            <router-link to="/login">Login</router-link>
                            <router-link to="/register">Register</router-link>
                            <!-- <a href="#">Login</a> -->
                            <!-- <a href="#">Register</a> -->
                        </div>
                        <ul class="header__right__widget">
                            <li @click="openSearch"><span class="icon_search search-switch"></span></li>
                            <li>
                                <a href="#"><span class="icon_heart_alt"></span>
                                    <div class="tip">2</div>
                                </a>
                            </li>
                            <li>
                                <router-link to="/cart"><span class="icon_bag_alt"></span>
                                    <!-- <a href="#"><span class="icon_bag_alt"></span> -->
                                    <div class="tip">2</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="canvas__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
</template>

<script>
import useSearch from '@/composables/useSearch';
export default {
    name: 'PageHeader',
    data() {
        return {
            ...useSearch()
        };
    }
}
</script>

<!-- <style lang="css" scoped>
.header {
    background: #ffffff;
    -webkit-box-shadow: 0px 5px 10px rgba(91, 91, 91, 0.1);
    box-shadow: 0px 5px 10px rgba(91, 91, 91, 0.1);
}

.header__logo {
    padding: 26px 0;
}

.header__logo a {
    display: inline-block;
}

.header__menu {
    padding: 30px 0 27px;
}

.header__menu ul li {
    list-style: none;
    display: inline-block;
    margin-right: 40px;
    position: relative;
}

.header__menu ul li.active a:after {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.header__menu ul li:hover a:after {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.header__menu ul li:hover .dropdown {
    top: 27px;
    opacity: 1;
    visibility: visible;
}

.header__menu ul li:last-child {
    margin-right: 0;
}

.header__menu ul li .dropdown {
    position: absolute;
    left: 0;
    top: 56px;
    width: 150px;
    background: #111111;
    text-align: left;
    padding: 2px 0;
    z-index: 9;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all, 0.3s;
    -o-transition: all, 0.3s;
    transition: all, 0.3s;
}

.header__menu ul li .dropdown li {
    display: block;
    margin-right: 0;
}

.header__menu ul li .dropdown li a {
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    padding: 8px 20px;
    text-transform: capitalize;
}

.header__menu ul li .dropdown li a:after {
    display: none;
}

.header__menu ul li a {
    font-size: 15px;
    text-transform: uppercase;
    color: #111111;
    font-weight: 500;
    display: block;
    padding: 2px 0;
    position: relative;
}

.header__menu ul li a:after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #ca1515;
    content: "";
    -webkit-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    transition: all, 0.5s;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
}

.header__right {
    text-align: right;
    padding: 30px 0 27px;
}

.header__right__auth {
    display: inline-block;
    margin-right: 25px;
}

.header__right__auth a {
    font-size: 12px;
    color: #666666;
    position: relative;
    margin-right: 8px;
}

.header__right__auth a:last-child {
    margin-right: 0;
}

.header__right__auth a:last-child:after {
    display: none;
}

.header__right__auth a:after {
    position: absolute;
    right: -8px;
    top: -2px;
    content: "/";
    font-size: 13px;
}

.header__right__widget {
    display: inline-block;
}

.header__right__widget li {
    list-style: none;
    display: inline-block;
    font-size: 18px;
    color: #111111;
    margin-right: 20px;
    cursor: pointer;
}

.header__right__widget li:last-child {
    margin-right: 0;
}

.header__right__widget li a {
    font-size: 18px;
    color: #111111;
    position: relative;
}

.header__right__widget li a .tip {
    position: absolute;
    right: -12px;
    top: -11px;
    height: 18px;
    width: 18px;
    background: #111111;
    font-size: 10px;
    font-weight: 500;
    color: #ffffff;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
}

.offcanvas-menu-wrapper {
    display: none;
}

.canvas__open {
    display: none;
}
</style> -->