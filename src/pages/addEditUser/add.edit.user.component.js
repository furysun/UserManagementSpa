import {state} from "../../core/state";
import $ from "jquery";
import {RegistrationValidator} from "../registration/registrationValidator";
import {v4 as uuidv4} from "uuid";
import {UserService} from "../../core/user.service";
import {Router} from "../../router";

const template = `
<div id="login-component">
<div class="form">
                <div class="profile">
                
                     <div id="add-user-title" class="center" hidden="true" >Add user</div>
                     <div id="edit-user-title" class="center" hidden="true">Edit user</div>
                     
                     <div>
                        <input id="name" class="form-control form-element form-input" type="text" placeholder="name">
                        <div id="name-required-error-message" class="alert alert-danger" hidden="true">Enter your name</div>
                     </div>
                     
                     <div>
                        <input id="age" class="form-control form-element form-input" placeholder="age" type="number"></div>
                        <div id="age-required-error-message" class="alert alert-danger" hidden="true">Enter your age</div>
                        <div id="invalid-age-error-message"  class="alert alert-danger" hidden="true">Invalid age</div>
                     <div>
                        <input id="login" class="form-control form-element form-input" type="text" placeholder="login"></div>
                        <div id="login-required-error-message" class="alert alert-danger" hidden="true">Enter your login</div>
                        <div id="login-already-exists-error-message" class="alert alert-danger" hidden ='true'>login already exists</div>
                     <div>
                        <input id="password" class="form-control form-element form-input"type="password" placeholder="password"></div>
                        <div id="password-required-error-message" class="alert alert-danger" hidden="true">Enter your password</div>
                     <div>
                     
                        <button onclick="addOrEdit()" class="btn form-element form-button">Add</button>
                        <button onclick="back()" class="btn form-element form-button">Back</button>
                </div>
            <div>
            </div>
        </div>
`;


export class AddEditUserComponent {
    static render() {
        $('#router-outlet').html(template);

        let selectedUserId = state.selectedUserId;
        console.log(selectedUserId + " id!");

        if (selectedUserId) {
            console.log(" ?!");

            const selectedUser = UserService.findById(selectedUserId);
            $('#name').val(selectedUser.name);
            $('#age').val(selectedUser.age);
            $('#login').val(selectedUser.login);
            $('#password').val(selectedUser.password);
        }

        window.addOrEdit = AddEditUserComponent.addOrEdit;
        window.back = AddEditUserComponent.back;
        AddEditUserComponent.editOrAdd();
    }

    static addOrEdit() {
        const name = $('#name').val();
        const age = $('#age').val();
        const login = $('#login').val();
        const password = $('#password').val();

        if (state.selectedUserId) {
            AddEditUserComponent.validationAndEdit(name, age, login, password);
        } else {
            AddEditUserComponent.validationAndAdd(name, age, login, password);
        }
        state.selectedUserId = null;

    }

    static editOrAdd() {
        const addUserTitle = $('#add-user-title');
        const editUserTitle = $('#edit-user-title');

        if (state.selectedUserId) {
            $('#edit-user-title').attr('hidden', false);
        } else {
            $('#add-user-title').attr('hidden', false);
        }
    }

    static back() {
        state.selectedUserId = null;
        Router.goToAdminDashboard();
    }

    static validationAndEdit(name, age, login, password) {
        if (RegistrationValidator.validateOnEdit(state.selectedUserId, name, age, login, password)) {
            const newUser = {
                id: state.selectedUserId,
                login: login,
                password: password,
                name: name,
                age: age
            };
            UserService.edit(newUser);
            Router.goToAdminDashboard();
        }
    }

    static validationAndAdd(name, age, login, password) {
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