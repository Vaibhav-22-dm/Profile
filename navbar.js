document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('header')[0].innerHTML = `
    <div class="row col-lg-10 mx-auto py-3 px-0 justify-content-between">
        <div class="logo col-lg-6 col-8 justify-content-start pl-0 row align-items-center">
            <img class="img-fluid" src="img/logo.png" width="50" style="margin-top:-5px;" id="nav-img">
            <span class="h2 font-weight-bolder" id="nav-heading">Vaibhav</span>
        </div>
        <nav class="col-lg-6 row justify-content-end align-items-center" id="navmenu">
            <a href="index.html" class="px-3 text-dark nav-items" id="nav-home">HOME</a>
            <a href="about.html" class="px-3 text-dark nav-items" id="nav-about">ABOUT</a>
            <a href="portfolio.html" class="px-3 text-dark nav-items" id="nav-portfolio">PORTFOLIO</a>
            <a href="blog.html" class="px-3 text-dark nav-items" id="nav-blog">BLOG</a>
            <a href="contact.html" class="px-3 text-dark nav-items " id="nav-contact">CONTACT</a>
            ${localStorage.getItem('access')===null?`<a href="login.html" class="px-3 text-dark nav-items " id="nav-login">LOGIN</a>`:`<a href="#" onclick='logout()' class="px-3 text-dark nav-items nav-logout" id="nav-login">LOGOUT</a>`}
        </nav>
        <nav class="menu-icon col-4 row justify-content-end align-items-center">
            <i class="fas fa-bars" style="font-size:25px;"  id="menu-icon"></i>
        </nav>
    </div>
    `

    document.getElementById('mobile-nav').innerHTML = `
    <ul class="" style="touch-action: pan-y;" id="">
            <li><a href="index.html" id="mobile-nav-home">Home</a></li>
            <li><a href="about.html" id="mobile-nav-about">About</a></li>
            <li><a href="portfolio.html" id="mobile-nav-portfolio">Portfolio</a></li>
            <li><a href="blog.html" id="mobile-nav-blog">Blog</a></li>
            <li><a href="contact.html" id="mobile-nav-contact">Contact</a></li>
            ${localStorage.getItem('access')===null?`<li><a href="login.html" id="mobile-nav-login">Login</a></li>`:`<li><a href="#" class="nav-logout" onclick='logout()' id="mobile-nav-login">Logout</a></li>`}
    </ul>
    `

    window.addEventListener('scroll', function(){
        if(window.pageYOffset>0){
            document.getElementById('header').classList.add('header-scrolled')
          }else{
            document.getElementById('header').classList.remove('header-scrolled')
          }
        console.log(1)
    })
    
    document.querySelector('#menu-icon').addEventListener('click', function() {
        document.querySelector('#mobile-nav').style.left = "0px"
        document.querySelector('#mobile-body-overlay').style.display = "block"
    })

    document.querySelector('footer').innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                    <h4>Nav Links</h4>
                    <p>
                        <a href="about.html" style="color: #777; display:block;" class="py-2">About</a>
                        <a href="portfolio.html" style="color: #777; display:block;" class="py-2">Portfolio</a>
                        <a href="blogs.html" style="color: #777; display:block;" class="py-2">Blogs</a>
                        <a href="contact.html" style="color: #777; display:block;" class="py-2">Contact</a>
                    </p>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                    <h4>Newsletter</h4>
                    <p style="color: #777;">Stay updated with our latest trends</p>
                    <div class="" id="mc_embed_signup">
                        <form target="_blank"
                            action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                            novalidate="true">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" name="EMAIL"
                                    placeholder="Enter Email Address" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Enter Email Address '" required=""
                                    aria-describedby="button-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-addon2">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 social-widget">
                <div class="single-footer-widget">
                    <h4>Follow Me</h4>
                    <p style="color: #777;">Let us be social</p>
                    <div class="footer-social d-flex align-items-center">
                        <a href="#" target="_blank" class="pr-2 py-2 mx-2 ml-0" style="color:white;font-size: 25px;"><i class="fa fa-facebook"></i></a>
                        <a href="#" target="_blank" class="p-2 mx-2" style="color:white;font-size: 25px;"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/vaibhav-mohite-044811206" target="_blank" class="p-2 mx-2" style="color:white;font-size: 25px;"><i class="fa fa-linkedin"></i></a>
                        <a href="#" target="_blank" class="p-2 mx-2" style="color:white;font-size: 25px;"><i class="fa fa-instagram"></i></a>
                        <a href="https://github.com/Vaibhav-22-dm" target="_blank" class="p-2 mx-2" style="color:white;font-size: 25px;"><i class="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
            <p class="footer-text col-12 pt-5" style="color: #777;">
                Copyright © 2021 All rights reserved | This website is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by 
                <a href="https://vaibhav-22-dm.github.io/profile.html" target="_blank">Vaibhav Mohite</a>
            </p>
        </div>
    </div>
    `
    const modal = document.querySelector('#mobile-body-overlay')
    const modal_nav = document.querySelector('#mobile-nav')
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          modal_nav.style.left = "-268px"
        }
      }

    document.querySelectorAll('.nav-logout').forEach((item) => {
        item.addEventListener('click',() => {
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            window.location.href = 'index.html'
        })
    })
})
