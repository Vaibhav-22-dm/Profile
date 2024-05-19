document.addEventListener('DOMContentLoaded', function () {
    // function getCookie(name) {
    //     let cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         const cookies = document.cookie.split(';');
    //         for (let i = 0; i < cookies.length; i++) {
    //             const cookie = cookies[i].trim();
    //             // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                     break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // var csrftoken = getCookie('csrftoken');

    const category = location.search.split('category=')[1] || ""

    const URL = "https://script.google.com/macros/s/AKfycbx2xNg-WctUEWq0mL2tBEk8QnmHwnt6dFiwu_z4gkbSRqXJQC6IRlwiwcmBzAMgdJsZrA/exec"

    function fetchBlogs(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                var blogs = data.blogs
                content = document.querySelector('.posts-list')
                content.innerHTML = ''
                blogs.forEach((blog) => {
                    content.innerHTML +=
                        `
                <div class="single-post row mb-3">
                    <div class="col-lg-3  col-md-3 meta-details">
                        <ul class="tags">`
                        +
                        `<li> ${blog.Category}</li>`
                        +
                        `</ul>
                        <div class="user-details row">
                            <p class="user-name col-lg-12 col-md-12 col-6">
                                <span>${blog.Author}</span>
                                <i class="fa fa-solid fa-pen-nib"></i>
                            </p>
                            <p class="date col-lg-12 col-md-12 col-6">
                                <span style="padding-left: 5px;">${blog.Date}</span>
                                <i class="fa fa-solid fa-calendar"></i>
                            </p>
                            `
                        // +
                        // `
                        // <p class="comments col-lg-12 col-md-12 col-6">
                        //     <span style="padding-left: 5px;">${blog.comments} Comments</span>
                        //     <i class="fa fa-solid fa-comment"></i>
                        // </p>
                        // `
                        +
                        `
                        </div>
                    </div>
                    <div class="col-lg-9 col-md-9 pb-2">
                        <div class="feature-img" style="max-height:300px; overflow:hidden;">
                            <img class="img-fluid" src="http://127.0.0.1:8000/${blog.Image}" alt="">
                        </div>
                        <a class="posts-title" href="blog_single.html?blog=${blog.ID}">
                            <h3 class="py-2">${blog.Title}</h3>
                        </a>
                        <div class="pb-2">
                        ${blog.Content.split('</p>')[0]}
                        </div>
                        <a href="blog_single.html?blog=${blog.ID}" class="view-more-btn">View More</a>
                    </div>
                </div>
                `
                })
            });
    }


    fetchBlogs(category === "" ? URL : URL + '?Category=' + category)

    pages = document.querySelectorAll('.page-link')
    pages.forEach((page) => {
        page.addEventListener('click', () => {
            fetchBlogs(URL + '?pageSize=1&page=' + page.innerHTML)
        })
    })

    fetch(URL + '?page=1&pageSize=5')
        .then((response) => response.json())
        .then((data) => {
            var blogs = data.blogs
            content = document.querySelector('.popular-post-list')
            blogs.forEach((blog) => {
                content.innerHTML +=
                    `
            <div class="single-post-list d-flex flex-row align-items-center">
                <div class="thumb">
                    <img class="img-fluid" src="${blog.Image}" alt="" style="height:60px;width:80px;">
                </div>
                <div class="details">
                    <a href="blog_single.html?blog=${blog.ID}">
                        <h6>${blog.Title}</h6>
                    </a>
                </div>
            </div>
            `
            })
        });








})