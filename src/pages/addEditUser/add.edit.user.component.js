import {state} from "../../core/state";
import $ from "jquery";
import {RegistrationValidator} from "../registration/registrationValidator";
import {v4 as uuidv4} from "uuid";
import {UserService} from "../../core/user.service";
import {Router} from "../../router";

const template = `

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
                     <div>
                        <input id="login"class="line" type="text" placeholder="login"></div>
                        <div id="login-required-error-message"hidden="true">Enter your login</div>
                        <div id="login-already-exists-error-message" hidden ='true'>login already exists</div>
                     <div>
                        <input id="password" class="line" type="password" placeholder="password"></div>
                        <div id="password-required-error-message" hidden="true">Enter your password</div>
                     <div>
                     
                        <button onclick="tryToAdd()"class="prof-button">Add</button>
                        <button onclick="goToAdminDashboard()" class="prof-button ok-left">Back</button>
                </div>
            <div
        </div>
`;


export class AddEditUserComponent {
    static render() {
        $('#router-outlet').html(template);

        let selectedUserId = state.selectedUserId;
        if(selectedUserId){
            const selectedUser = UserService.findById(selectedUserId);
            $('#name').val(selectedUser.name);
            $('#age').val(selectedUser.age);
            $('#login').val(selectedUser.login);
            $('#password').val(selectedUser.password);
        }

        window.tryToAdd = AddEditUserComponent.tryToAdd;
    }

    static tryToAdd() {
        console.log('mrrr');

        const name = $('#name').val();
        const age = $('#age').val();
        const login = $('#login').val();
        const password = $('#password').val();

        if (RegistrationValidator.validate(name, age, login, password)) {
            const newUser = {
                id: uuidv4(),
                login: login,
                password: password,
                name: name,
                age: age
            };
            UserService.add(newUser);
            Router.goToAdminDashboard();
        }
    }
}