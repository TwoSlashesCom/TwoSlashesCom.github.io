// document.addEventListener('DOMContentLoaded', () => {
//     const loginPage = document.getElementById('login-page');
//     const registerPage = document.getElementById('register-page');
//     const registerLink = document.getElementById('register-link');
//     const backToLogin = document.getElementById('back-to-login');

//     registerLink.addEventListener('click', () => {
//         loginPage.classList.add('hidden');
//         registerPage.classList.remove('hidden');
//     });

//     backToLogin.addEventListener('click', () => {
//         registerPage.classList.add('hidden');
//         loginPage.classList.remove('hidden');
//     });

//     document.getElementById('login-form').addEventListener('submit', (e) => {
//         e.preventDefault();
//         fetch('https://ddemoapi.com/api/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 email: document.getElementById('login-email').value,
//                 password: document.getElementById('login-password').value
//             })
//         }).finally(() => {
//             window.location.href = '/mainpage.html';
//         });
//     });

//     document.getElementById('register-form').addEventListener('submit', (e) => {
//         e.preventDefault();
//         fetch('https://ddemoapi.com/api/register', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 lastname: document.getElementById('register-lastname').value,
//                 firstname: document.getElementById('register-firstname').value,
//                 email: document.getElementById('register-email').value,
//                 password: document.getElementById('register-password').value
//             })
//         }).finally(() => {
//             window.location.href = '/index.html';
//         });
//     });
// });


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

    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Simple login validation
        if (!email || !password) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        try {
            const response = await fetch('https://ddemoapi.com/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            
            if (!response.ok) {
                alert('Ошибка авторизации. Проверьте email и пароль.');
                return;
            }

            const result = await response.json();
            if (result.success) {
                window.location.href = '/mainpage.html';
            } else {
                alert(result.message || 'Ошибка авторизации.');
            }
        } catch (error) {
            console.error('Ошибка при авторизации:', error);
            alert('Произошла ошибка. Попробуйте позже.');
        }
    });

    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const lastname = document.getElementById('register-lastname').value.trim();
        const firstname = document.getElementById('register-firstname').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();
        const confirmPassword = document.getElementById('register-confirm-password').value.trim();

        // Registration validation
        if (!lastname || !firstname || !email || !password || !confirmPassword) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Пароли не совпадают.');
            return;
        }

        if (password.length < 6) {
            alert('Пароль должен быть не менее 6 символов.');
            return;
        }

        try {
            const response = await fetch('https://ddemoapi.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ lastname, firstname, email, password })
            });

            if (!response.ok) {
                alert('Ошибка регистрации. Проверьте введённые данные.');
                return;
            }

            const result = await response.json();
            if (result.success) {
                alert('Регистрация прошла успешно. Теперь вы можете войти.');
                window.location.href = '/index.html';
            } else {
                alert(result.message || 'Ошибка регистрации.');
            }
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            alert('Произошла ошибка. Попробуйте позже.');
        }
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
