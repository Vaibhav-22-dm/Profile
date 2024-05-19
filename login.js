document.addEventListener('DOMContentLoaded', function () {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    document.getElementById('myForm').addEventListener('submit',(e) => {
        e.preventDefault();
        username = document.getElementById('username').value
        password = document.getElementById('password').value
        password2 = document.getElementById('password2').value
        console.log(username, password, password2)

        fetch('http://127.0.0.1:8000/api/login/',{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body:JSON.stringify({
                'username':username,
                'password':password,
                'password2':password2
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('access',data['access'])
            localStorage.setItem('refresh',data['refresh'])
            window.location.href = 'index.html'
        })
        .catch(err => console.log(err))
    })






});