document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert('Registration successful!');
                })
                .catch((error) => {
                    alert('Registration failed: ' + error.message);
                });
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    alert('Login successful!');
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    alert('Login failed: ' + error.message);
                });
        });
    }
});
