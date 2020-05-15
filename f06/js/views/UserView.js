import UserController from '../controllers/UserController.js'

export default class UserView {
    constructor() {
        this.userController = new UserController();

        // register DOM
        this.registerForm = document.getElementById('frmRegister');
        this.registerUsername = document.getElementById('txtUsernameRegister');
        this.registerPassword = document.getElementById('txtPasswordRegister');
        this.registerPassword2 = document.getElementById('txtPasswordRegister2');
        this.registerMessage = document.getElementById('mdlRegisterMessage');

        this.bindAddRegisterForm();

        // login DOM
        this.loginForm = document.getElementById('frmLogin');
        this.loginUsername = document.getElementById('txtUsername');
        this.loginPassword = document.getElementById('txtPassword');
        this.loginMessage = document.getElementById('mdlLoginMessage');

        this.bindAddLoginForm();

        // buttons DOM
        this.loginButton = document.getElementById('btnLogin');
        this.registerButton = document.getElementById('btnRegister');
        this.logoutButton = document.getElementById('btnLogout');

        this.bindAddLogoutEvent();

        this.checkLoginStatus();     
    }

    bindAddRegisterForm() {
        this.registerForm.addEventListener('submit', event => {
            event.preventDefault();

            try {
                if (this.registerPassword.value !==this.registerPassword2.value) {
                    throw Error('Password and Confirm Password are not equal');   
                }
                this.userController.createUser(this.registerUsername.value, this.registerPassword.value);
                this.displayRegisterMessage('User registered with success!', 'success');
            } catch(e) {
                this.displayRegisterMessage(e, 'danger');
            }
        });
    }

    bindAddLoginForm() {
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault(); 

            try {
                this.userController.loginUser(this.loginUsername.value, this.loginPassword.value);
                this.displayLoginMessage('User logged in with success!', 'success');
                this.updateButtons('login');
                location.reload()
            } catch(e) {
                this.displayLoginMessage(e, 'danger');
            }
        });
    }
    
    bindAddLogoutEvent() {
        this.logoutButton.addEventListener('click', event => {
            this.userController.logoutUser();
            this.updateButtons('logout');
            location.reload()
        });
    }

    checkLoginStatus() {
        if (this.userController.checkLoginStatus()) {
            this.updateButtons('login');
        } else {
            this.updateButtons('logout');
        }
    }

    displayRegisterMessage(message, type) {
        this.registerMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    displayLoginMessage(message, type) {
        this.loginMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }

    updateButtons(event) {
        switch(event) {
            case 'login':
                this.loginButton.style.visibility = 'hidden'
                this.registerButton.style.visibility = 'hidden'
                this.logoutButton.style.visibility = 'visible'
                
               /* this.loginButton.setAttribute('Disabled', '');                
                this.registerButton.setAttribute('Disabled', '');
                this.logoutButton.removeAttribute('Disabled', ''); */ 
                break;
            case 'logout':
                this.loginButton.style.visibility = 'visible'
                this.registerButton.style.visibility = 'visible'
                this.logoutButton.style.visibility = 'hidden'
        }
    }
}
