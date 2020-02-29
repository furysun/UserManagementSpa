import $ from "jquery";
import './login.component.scss';
import {state} from "../../core/state";
import {Router} from "../../router";
import {HeaderComponent} from "../../components/header/header.component";

"use strict";

const template = `
    <div id="login-component">
        <div class="forms">
            <div class="form-log-passw">
                <div class="log-form">
                    <div class="name"><p>login</p>
                        <input id="login-input" class="login" type="text" onfocus="hideErrorMessages()"></div>
                    <div class="pass"><p>password</p>
                        <input id="password-input" class="password" type="password">    
                    </div>
                    <div id="error-message-required" hidden="true">Login and password required</div>
                    <div id="error-message-invalid" hidden="true">Login or password invalid</div>
                    <div class="ok-butt">
                        <button onclick="tryToLogin()" class="button-ok">Ok</button>
                    </div>
                    
                    <div onclick="goToRegistration()" class="reg-butt"><button class="button-registr">Registration</button></div>
                    </div>
                </div>    
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

        if (login === null || login === "" || password === null || password === "") {
            $('#error-message-required').attr('hidden', false);
        } else {
            const user = state.users.some((u) => u.login === login && u.password === password);
            if (user) {
                state.currentUser = user;
                HeaderComponent.render();
                Router.goToAdminDashboard();
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

