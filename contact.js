document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-btn').addEventListener('click', function (e) {
        e.preventDefault();

        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        const URL = "https://script.google.com/macros/s/AKfycbz_9ElK1RsRK2_L1cpXN8HrQhBLftiS61IheWiHx4YT2QY0ihNo-aTEoPI8973K12i7JQ/exec"

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});