import $ from "jquery";
import './registration.component.scss';
import {state} from "../../core/state";
import {v4 as uuidv4} from 'uuid';
import {Router} from "../../router";
import {RegistrationValidator} from "./registrationValidator";
import {HeaderComponent} from "../../components/header/header.component";
import {UserService} from "../../core/user.service";

const template = `<div id="page-two">
            <div class="form">
                <div class="profile">
                     <div>
                        <input id="name" class="line" type="text" placeholder="name">
                        <div id="name-required-error-message" hidden="true">Enter your name</div>
                     </div>
                     <div>
                        <input id="age" class="line" placeholder="age" type="number"></div>
                        <div id="age-required-error-message" hidden="true">Enter your age</div>
                        <div id="invalid-age-error-message" hidden="true">Invalid age</div>
                     <div>
                        <input id="login"class="line" type="text" placeholder="login"></div>
                        <div id="login-required-error-message"hidden="true">Enter your login</div>
                        <div id="login-already-exists-error-message" hidden ='true'>login already exists</div>
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
        const confirmPassword = $('#confirm-the-password').val();

        if (RegistrationValidator.validate(name, age, login, password, confirmPassword)) {
            const newUser = {
                id: uuidv4(),
                login: login,
                password: password,
                name: name,
                age: age
            };
            UserService.add(newUser);
            state.currentUser = newUser;
            HeaderComponent.render();
            Router.goToAdminDashboard();
        }
    }
}