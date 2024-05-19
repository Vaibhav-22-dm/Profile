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
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }
    // var csrftoken = getCookie('csrftoken');


    var myBlog = location.search.split('blog=')[1]

    const URL = "https://script.google.com/macros/s/AKfycbx2xNg-WctUEWq0mL2tBEk8QnmHwnt6dFiwu_z4gkbSRqXJQC6IRlwiwcmBzAMgdJsZrA/exec"

    fetch(URL + '?id=' + myBlog)
        .then(res => res.json())
        .then(data => {
            var blog = data.blog
            document.querySelector('.single-post').innerHTML =
                `
        <div class="col-lg-12">
            <div class="feature-img">
                <img class="img-fluid" src="${blog.Image}" alt="">
            </div>
        </div>
        <div class="col-lg-3 col-md-3 meta-details my-3">
            <ul class="tags">
        `
                +
                `<li> ${blog.Category}</li>`
                +
                `
        </ul>
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
                +
                // `
                // <p class="view col-lg-12 col-md-12 col-6">
                //     <span style="padding-left: 5px;">${data.count} Views</span>
                //     <i class="fa fa-solid fa-eye"></i>
                // </p>
                // <p class="comments col-lg-12 col-md-12 col-6">
                //     <span style="padding-left: 5px;">${data.comments} Comments</span>
                //     <i class="fa fa-solid fa-comment"></i>
                // </p>
                // `
                // +
                `
            </div>
        </div>
        <div class="col-lg-9 col-md-9 my-3">
            <h3>${blog.Title}</h3>
            <p class="excert">
                ${blog.Content}
            </p>
        </div>
        `
        })

    // function buildComments(){
    //     fetch('http://127.0.0.1:8000/api/getblogcomment/'+myBlog+'/')
    //     .then(res => res.json())
    //     .then(data => {
    //         content = document.querySelector('.comment-list')
    //         data.forEach((comment) => {
    //             content.innerHTML +=
    //             `
    //             <div class="single-comment justify-content-between d-flex">
    //                 <div class="user justify-content-between d-flex">
    //                     <div class="thumb">
    //                         <img src="https://media.istockphoto.com/vectors/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-vector-id1220827048?k=20&m=1220827048&s=170667a&w=0&h=7PBs4gZy40lIQIPwK5uaGaKhKhXnoMvuIbPLDrz3FaE=" alt=""
    //                         style="height:100px;border:1px solid lightgrey;">
    //                     </div>
    //                     <div class="desc">
    //                         <h5><a href="#">${comment.owner}</a></h5>
    //                         <p class="date">${comment.date}</p>
    //                         <p class="comment">
    //                             ${comment.body}
    //                         </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             `
    //         })
    //     })     
    // }

    // buildComments();

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


    // document.getElementById('comment-form').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     token = localStorage.getItem('access')
    //     if(token===null){
    //         window.alert('Please Login')
    //     }
    //     else{
    //         message = document.getElementById('comment').value
    //         fetch('http://127.0.0.1:8000/api/addcomment/',{
    //             method: "POST",
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 'X-CSRFToken': csrftoken,
    //                 'Authorization': `Bearer ${token}`
    //             },
    //             body:JSON.stringify({
    //                 'post':myBlog,
    //                 'body':message,
    //             })
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             document.getElementById('comment').value = ''
    //             buildComments();
    //         })
    //     }
    // })






})