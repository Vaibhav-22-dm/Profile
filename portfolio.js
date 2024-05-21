document.addEventListener('DOMContentLoaded', function(){
    
    const all = document.getElementById('all')
    const frontend = document.getElementById('frontend')
    // const games = document.getElementById('jsgames')
    const django = document.getElementById('django')
    const android = document.getElementById('android')
    const react = document.getElementById('reactjs')
    const projects = document.querySelectorAll('.project-container')
    const filters = document.querySelectorAll('.filters ul li')

    all.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.remove('active'))
        all.classList.add('active')
        projects.forEach((arr) => {
            arr.style.display = 'flex';
        })
    })

    frontend.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.remove('active'))
        frontend.classList.add('active')
        projects.forEach((arr) => {
            if(!arr.classList.contains('frontend')) arr.style.display = 'none';
            else arr.style.display = 'flex'
        })
    })

    // games.addEventListener('click', () => {
    //     filters.forEach(filter => filter.classList.remove('active'))
    //     games.classList.add('active')
    //     projects.forEach((arr) => {
    //         if(!arr.classList.contains('games')) arr.style.display = 'none';
    //         else arr.style.display = 'flex'
    //     })
    // })

    django.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.remove('active'))
        django.classList.add('active')
        projects.forEach((arr) => {
            if(!arr.classList.contains('django')) arr.style.display = 'none';
            else arr.style.display = 'flex'
        })
    })

    android.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.remove('active'))
        android.classList.add('active')
        projects.forEach((arr) => {
            if (!arr.classList.contains('android')) arr.style.display = 'none';
            else arr.style.display = 'flex'
        })
    })

    react.addEventListener('click', () => {
        filters.forEach(filter => filter.classList.remove('active'))
        react.classList.add('active')
        projects.forEach((arr) => {
            if(!arr.classList.contains('reactjs')) arr.style.display = 'none';
            else arr.style.display = 'flex'
        })
    })

    

})