import $ from "jquery";
// import './dashboard.component.scss';
import './dashboard.component.scss';
import {state} from "../../core/state";

// const a = [1, 2, 3, 4,7];
//
// let template2 = `<table style="width:100%">`;
//
// a.forEach((el)=>{
//     template2 += `
//     <tr>
//         <td>${el}</td>
//         <td>${el}</td>
//         <td>${el}</td>
//         <td>${el}</td>
//         <td>${el}</td>
//         <td>${el}</td>
//     </tr>`;
// });
//
// template2 += `</table>`;

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
<table style="width:100%">
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>Login</th>
    <th>Actions</th>
    <th></th>
  </tr>`;

state.users.forEach((user)=>{
    template += `
  <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.login}</td>
    <td class="butt-table"><buttt class= "butt-ok-table">Edit</buttt></td>
    <td class="butt-table"><buttt class="butt-ok-table">Delete</buttt></td>
  </tr>`;
});

template += ` 
</table>
</div>
    </div>`;

export class DashboardComponent {
    static render() {
        $('#router-outlet').html(template);
    }
}