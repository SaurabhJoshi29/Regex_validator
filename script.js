let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function (dets) {
        dets.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        let emailAns = emailRegex.test(email.value);
        let passwordAns = passwordRegex.test(password.value);

        let emailerror = document.querySelector('#emailerror');
        let passworderror = document.querySelector('#passworderror');

        if (!emailAns) {
            emailerror.style.display = 'block';
        } else {
            emailerror.style.display = 'none';
        }

        if (!passwordAns) {
            passworderror.style.display = 'block';
        } else {
            passworderror.style.display = 'none';
        }
    });
}
