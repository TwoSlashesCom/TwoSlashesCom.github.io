document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
    const registerLink = document.getElementById('register-link');
    const backToLogin = document.getElementById('back-to-login');

    registerLink.addEventListener('click', () => {
        loginPage.classList.add('hidden');
        registerPage.classList.remove('hidden');
    });

    backToLogin.addEventListener('click', () => {
        registerPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('https://ddemoapi.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.getElementById('login-email').value,
                password: document.getElementById('login-password').value
            })
        }).finally(() => {
            window.location.href = '/mainpage.html';
        });
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('https://ddemoapi.com/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lastname: document.getElementById('register-lastname').value,
                firstname: document.getElementById('register-firstname').value,
                email: document.getElementById('register-email').value,
                password: document.getElementById('register-password').value
            })
        }).finally(() => {
            window.location.href = '/index.html';
        });
    });
});

document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const passwordInput = this.previousElementSibling;

        if (passwordInput && passwordInput.type === 'password') {
            passwordInput.type = 'text'; 
            this.textContent = '🙈'; 
        } else if (passwordInput) {
            passwordInput.type = 'password'; 
            this.textContent = '👁️'; 
        }
    });
});
