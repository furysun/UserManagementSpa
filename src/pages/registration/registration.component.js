import $ from "jquery";
import './registration.component.scss';

const template = `<div id="page-two">w
        <div class="header">
        <div>
            <img src="./assets/img/diamond.svg">
            </div>
           
        </div>
            <div class="forms">
                <div class="profile">
                     <div>
                        <input id="name" class="line" type="text" placeholder="name">
                        <div id="name-required-error-message" hidden="true">Enter your name</div>
                     </div>
                     <div>
                        <input id="age" class="line" placeholder="age" type="number"></div>
                        <div id="age-required-error-message" hidden="true">Enter your age</div>
                        <div id="invalid-age-error-message" hidden="true">Invalid age</div>
                        <div id="age-dont-number-error-message" hidden="true" >NOOOOOO</div>
                     <div>
                        <input id="login"class="line" type="text" placeholder="login"></div>
                        <div id="login-required-error-message"hidden="true">Enter your login</div>
                     <div>
                        <input id="password" class="line" type="password" placeholder="password"></div>
                        <div id="password-required-error-message" hidden="true">Enter your password</div>
                     <div>
                        <input id="confirm-the-password" class="line" type="password" placeholder="confirm the password"></div>
                        <div id="confirm-required-error-message" hidden="true">Enter your confirm the password</div>
                        <div id="passwords-dont-match-error-message" hidden="true">password does't match confirm the password</div>
                     <div>
                        <button onclick="goToLogin()"class="prof-button">Back</button>
                        <button onclick="tryToRegistration()" class="prof-button ok-left">Ok</button>
                     </div>
                </div>
            <div
        </div>
    </div>`;

export class RegistrationComponent {
    static render() {
        $('#router-outlet').html(template);
        window.tryToRegistration = RegistrationComponent.tryToRegistration;
    }

    static tryToRegistration() {
        const name = $('#name').val();
        const age = $('#age').val();
        const login = $('#login').val();
        const password = $('#password').val();
        const confirmThePassword = $('#confirm-the-password').val();

        RegistrationComponent.validateName(name);
        RegistrationComponent.validateAge(age);
        RegistrationComponent.validateLogin(login);
        RegistrationComponent.validatePassword(password);
        RegistrationComponent.validateConfirmThePassword(confirmThePassword);
    }

    static validateName(name) {
        if (name === null || name === '') {
            $('#name-required-error-message').attr('hidden', false);
        } else {
            $('#name-required-error-message').attr('hidden', true);
        }
    }

    static verifyPassword(confirmThePassword) {
        const password = $('#password').val();

        if (password !== confirmThePassword) {
            $('#passwords-dont-match-error-message').attr('hidden', false);
        }
    }

    static checkAgeRange(age) {
        if (age < 18 || age > 110) {
            $('#invalid-age-error-message').attr('hidden', false);
        } else {
            $('#invalid-age-error-message').attr('hidden', true);
        }
    }

    static validateAge(age) {
        if (age === null || age === '') {
            $('#age-required-error-message').attr('hidden', false);
        } else {
            $('#age-required-error-message').attr('hidden', true);
        }
        RegistrationComponent.checkAgeRange(age);
    }

    static validateLogin(login) {
        if (login === null || login === '') {
            $('#login-required-error-message').attr('hidden', false);
        } else {
            $('#login-required-error-message').attr('hidden', true);
        }
    }

    static validatePassword(password) {
        if (password === null || password === '') {
            $('#password-required-error-message').attr('hidden', false);
        } else {
            $('#password-required-error-message').attr('hidden', true);
        }
    }

    static validateConfirmThePassword(confirmThePassword) {
        if (confirmThePassword === null || confirmThePassword === '') {
            $('#confirm-required-error-message').attr('hidden', false);
        } else {
            $('#confirm-required-error-message').attr('hidden', true);
        }
        RegistrationComponent.verifyPassword(confirmThePassword);
    }
}