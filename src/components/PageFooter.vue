<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-7">
                    <div class="footer__about">
                        <div class="footer__logo">
                            <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt cilisis.
                        </p>
                        <div class="footer__payment">
                            <a href="#"><img src="img/payment/payment-1.png" alt="" /></a>
                            <a href="#"><img src="img/payment/payment-2.png" alt="" /></a>
                            <a href="#"><img src="img/payment/payment-3.png" alt="" /></a>
                            <a href="#"><img src="img/payment/payment-4.png" alt="" /></a>
                            <a href="#"><img src="img/payment/payment-5.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-5">
                    <div class="footer__widget">
                        <h6>Quick links</h6>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4">
                    <div class="footer__widget">
                        <h6>Account</h6>
                        <ul>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Orders Tracking</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8 col-sm-8">
                    <div class="footer__newslatter">
                        <h6>NEWSLETTER</h6>
                        <form action="#">
                            <input type="text" placeholder="Email" />
                            <button type="submit" class="site-btn">Subscribe</button>
                        </form>
                        <div class="footer__social">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
}
</script>

<!-- <style lang="css" scoped>
/*---------------------
  Footer
-----------------------*/

.footer {
    padding-top: 55px;
}

.footer__about {
    margin-bottom: 30px;
}

.footer__about p {
    margin-bottom: 20px;
}

.footer__logo {
    margin-bottom: 20px;
}

.footer__payment a {
    margin-right: 6px;
    margin-bottom: 10px;
    display: inline-block;
}

.footer__payment a:last-child {
    margin-right: 0;
}

.footer__widget {
    margin-bottom: 30px;
}

.footer__widget h6 {
    color: #111111;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 12px;
}

.footer__widget ul li {
    list-style: none;
}

.footer__widget ul li a {
    font-size: 14px;
    color: #666666;
    line-height: 30px;
}

.footer__newslatter {
    margin-bottom: 30px;
}

.footer__newslatter h6 {
    color: #111111;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 25px;
}

.footer__newslatter form {
    position: relative;
    margin-bottom: 30px;
}

.footer__newslatter form input {
    height: 52px;
    width: 100%;
    border: 1px solid #e1e1e1;
    border-radius: 50px;
    padding-left: 30px;
    font-size: 14px;
    color: #666666;
}

.footer__newslatter form input::-webkit-input-placeholder {
    color: #666666;
}

.footer__newslatter form input::-moz-placeholder {
    color: #666666;
}

.footer__newslatter form input:-ms-input-placeholder {
    color: #666666;
}

.footer__newslatter form input::-ms-input-placeholder {
    color: #666666;
}

.footer__newslatter form input::placeholder {
    color: #666666;
}

.footer__newslatter form button {
    position: absolute;
    right: 4px;
    top: 4px;
}

.footer__social a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background: #e1e1e1;
    font-size: 15px;
    color: #111111;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    margin-right: 6px;
    margin-bottom: 5px;
}

.footer__social a:last-child {
    margin-right: 0;
}

.footer__copyright__text {
    border-top: 1px solid #e1e1e1;
    padding: 18px 0 25px;
    text-align: center;
    margin-top: 35px;
}

.footer__copyright__text p {
    margin-bottom: 0;
}

.footer__copyright__text a {
    color: #5C5C5C;
}

.footer__copyright__text i {
    color: #ca1515;
}

.footer__copyright__text a:hover {
    color: #ca1515;
}
</style> -->