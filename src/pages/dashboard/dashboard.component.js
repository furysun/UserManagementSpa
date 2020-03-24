import $ from "jquery";
import './dashboard.component.scss';
import {state} from "../../core/state";
import {Router} from "../../router";
import {UserService} from "../../core/user.service";

let template = `<div id="page-three">
    <div class="table">
    </div>
</div>`;

export class DashboardComponent {
    static render() {
        console.log(state.users);
        $('#router-outlet').html(template);
        DashboardComponent.drawTable(state.users);
        window.selectUserToEdit = DashboardComponent.selectUserToEdit;
        window.deleteUser = DashboardComponent.deleteUser;
        window.showModal = DashboardComponent.showModal;

        $('.')
    }

    static drawTable(users) {
        let tableTemplate = `
        <table class="table">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Login</th>
                <th>Actions</th>
                <th></th>
              </tr>`;

        users.forEach((user) => {
            tableTemplate += `
              <tr>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.login}</td>
                <td><button class="btn form-element form-button marg" onclick="selectUserToEdit(\'${user.id}\')">Edit</button></td>
                <td><button class="btn form-element form-button marg" onclick="showModal(\'${user.id}\')">Delete</button></td>
              </tr>`;
        });

        tableTemplate += `</table>
        
        <button onclick="goToAddUser()" class="btn form-element form-button add-button">Add</button>`;

        tableTemplate += `
            <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary form-button" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary form-button" onclick="deleteUser()">Delete</button>
                  </div>
                  
                </div>
              </div>
            </div>`;

        $('.table').html(tableTemplate);
    }

    static selectUserToEdit(id) {
        console.log(id);
        state.selectedUserId = id;
        Router.goToAddUser();

    }

    static deleteUser() {
        const id = state.selectedUserIdToDelete;
        UserService.delete(id);
        $("#exampleModal").modal('hide');

        DashboardComponent.render();
    }

    static showModal(id) {
        state.selectedUserIdToDelete = id;
        $("#exampleModal").modal();
    }
}