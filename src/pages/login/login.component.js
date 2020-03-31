import $ from "jquery";
import './login.component.scss';
import {state} from "../../core/state";
import {Router} from "../../router";
import {HeaderComponent} from "../../components/header/header.component";
import {UserService} from "../../core/user.service";
import {ValidateUtils} from "../../core/validate.utils";

"use strict";

const template = `
    <div id="login-component">
        <div class="form">
            <input id="login-input"  class="form-control form-element form-input" type="text" onfocus="hideErrorMessages()" placeholder="login">
            <input id="password-input"  class="form-control form-element form-input" type="password" onfocus="hideErrorMessages()" placeholder="password">    
          
            <div id="error-message-required" class="alert alert-danger" hidden="true">Login and password required</div>
            <div id="error-message-invalid"  class="alert alert-danger" hidden="true">Login or password invalid</div>
            
            <button onclick="tryToLogin()" class="btn form-element form-button">Ok</button>
            <button onclick="goToRegistration()" class="btn form-element form-button">Registration</button>
        </div>
    </div>`;

export class LoginComponent {
    static render() {
        $('#router-outlet').html(template);

        window.tryToLogin = LoginComponent.tryToLogin;
        window.hideErrorMessages = LoginComponent.hideErrorMessages;
    }

    static tryToLogin() {
        const login = $('#login-input').val();
        const password = $('#password-input').val();

        if (ValidateUtils.isEmpty(login) || ValidateUtils.isEmpty(password)) {
            $('#error-message-required').attr('hidden', false);
        } else {
            const user = UserService.find(login, password);
            if (user) {
                state.currentUser = user;
                HeaderComponent.render();

                if (user.admin === true) {
                    Router.goToAdminDashboard();
                } else {
                    Router.goToHiUser();
                }
            } else {
                $('#error-message-invalid').attr('hidden', false);
            }
        }
    }

    static hideErrorMessages() {
        $('#error-message-required').attr('hidden', true);
        $('#error-message-invalid').attr('hidden', true);
    }
}

