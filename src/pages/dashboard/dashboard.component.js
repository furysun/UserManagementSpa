import $ from "jquery";
// import './dashboard.component.scss';
import './dashboard.component.scss';
import {state} from "../../core/state";

let template = `<div id="page-three">
        <div class="header">
            <div>
                <img src="./assets/img/diamond.svg">
            </div>
                <div class="hi">
                    Hello, Rose
                </div>
            <div>

            <button onclick="goToLogin()" class="log-out">Log out</button></div>
        </div>

<div class="table">
</div>
    </div>`;

export class DashboardComponent {
    static render() {
        console.log(state.users);
        $('#router-outlet').html(template);
        DashboardComponent.drawTable(state.users);
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
                <td class="butt-table"><buttt class= "butt-ok-table">Edit</buttt></td>
                <td class="butt-table"><buttt class="butt-ok-table">Delete</buttt></td>
              </tr>`;
        });

        tableTemplate += `</table>`;

        $('.table').html(tableTemplate);
    }
}