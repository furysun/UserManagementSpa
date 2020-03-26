import $ from "jquery";
import './registration.component.scss';
import {state} from "../../core/state";
import {v4 as uuidv4} from 'uuid';
import {Router} from "../../router";
import {RegistrationValidator} from "./registrationValidator";
import {HeaderComponent} from "../../components/header/header.component";
import {UserService} from "../../core/user.service";
import {ValidateUtils} from "../../core/validate.utils";

const template = `<div id="page-two">
    <div id="login-component">
                <div class="form">
                    <div class="profile">
                    <div class="center">Registration</div>
                         <div>
                            <input id="name" onkeypress="return alphaOnly(event)" class="form-control form-element form-input" type="text" placeholder="name">
                            <div id="name-required-error-message" class="alert alert-danger" hidden="true">Enter your name</div>
                         </div>
                         <div>
                            <input id="age" onkeypress="return numericOnly(event)" class="form-control form-element form-input"placeholder="age" type="number"></div>
                            <div id="age-required-error-message" class="alert alert-danger"  hidden="true">Enter your age</div>
                            <div id="invalid-age-error-message" class="alert alert-danger" hidden="true">Invalid age</div>
                         <div>
                            <input id="login"  class="form-control form-element form-input" type="text" placeholder="login"></div>
                            <div id="login-required-error-message" class="alert alert-danger" hidden="true">Enter your login</div>
                            <div id="login-already-exists-error-message" class="alert alert-danger"  hidden ='true'>login already exists</div>
                         <div>
                            <input id="password"  class="form-control form-element form-input" type="password" placeholder="password"></div>
                            <div id="password-required-error-message" class="alert alert-danger" hidden="true">Enter your password</div>
                         <div>
                            <input id="confirm-the-password"  class="form-control form-element form-input" type="password" placeholder="confirm the password"></div>
                            <div id="confirm-required-error-message" class="alert alert-danger" hidden="true">Enter your confirm the password</div>
                            <div id="passwords-dont-match-error-message" v hidden="true">password does't match confirm the password</div>
                         <div>
                            <button onclick="tryToRegistration()" class="btn form-element form-button">Ok</button>
                            <button onclick="goToLogin()" class="btn form-element form-button">Back</button>
                         </div>
                    </div>
                <div>
                </div>
            </div>
        </div>`;

export class RegistrationComponent {
    static render() {
        $('#router-outlet').html(template);
        window.tryToRegistration = RegistrationComponent.tryToRegistration;
        window.alphaOnly = ValidateUtils.alphaOnly;
        window.numericOnly = ValidateUtils.numericOnly;
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