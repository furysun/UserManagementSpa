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
                <td class="butt-table"><buttt class= "butt-ok-table" onclick="selectUserToEdit(\'${user.id}\')">Edit</buttt></td>
                <td class="butt-table"><buttt class="butt-ok-table" onclick="deleteUser(\'${user.id}\')">Delete</buttt></td>
              </tr>`;
        });

        tableTemplate += `</table>
        
        <button onclick="goToAddUser()" class="butt-add-table">add+</button>`;

        $('.table').html(tableTemplate);
    }

    static selectUserToEdit(id) {
        console.log(id);
        state.selectedUserId = id;
        Router.goToAddUser();

    }

    static deleteUser(id) {
        UserService.delete(id);
        DashboardComponent.render();
    }
}