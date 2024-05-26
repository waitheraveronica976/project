
document.addEventListener('DOMContentLoaded', function () {
    const joinUsButton = document.getElementById('join-us');
    const joinForm = document.getElementById('join-form');

    joinUsButton.addEventListener('click', function () {
        joinForm.style.display = 'block';
    });

    joinForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = joinForm.querySelector('input[name="name"]').value;
        const course = joinForm.querySelector('input[name="course"]').value;
        const email = joinForm.querySelector('input[name="email"]').value;
        const contact = joinForm.querySelector('input[name="contact"]').value;

        if (name && course && email && contact) {
            alert('Thank you for joining us!');
            joinForm.reset();
            joinForm.style.display = 'none';
        } else {
            alert('Please fill in all fields.');
        }
    });
});


