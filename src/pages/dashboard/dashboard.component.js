import $ from "jquery";
// import './dashboard.component.scss';
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
            <table style="width:100%">
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
                <td class="butt-table"><button class= "butt-ok-table" onclick="selectUserToEdit(\'${user.id}\')">Edit</button></td>
                <td class="butt-table"><button class="butt-ok-table" onclick="showModal(\'${user.id}\')">Delete</button></td>
              </tr>`;
        });

        tableTemplate += `</table>
        
        <button onclick="goToAddUser()" class="butt-add-table">add+</button>`;

        tableTemplate += `
            <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="deleteUser()">Save changes</button>
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

        // $('.modal-backdrop').hide();
        DashboardComponent.render();
    }

    static showModal(id) {
        state.selectedUserIdToDelete = id;
        $("#exampleModal").modal();
    }
}