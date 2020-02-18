import $ from "jquery";
// import './dashboard.component.scss';
import './dashboard.component.scss';


const template = `<div id="page-three">
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
    <th>Type</th>
    <th>Login</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Tom</td>
    <td>50</td>
    <td>admin</td>
    <td>12345679</td>
    <td class="butt-table"><buttt class= "butt-ok-table">ok</buttt></td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
  </tr>

  <tr>
    <td>2</td>
    <td>Smith</td>
    <td>27</td>
    <td>user</td>
    <td>5679</td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Smith</td>
    <td>40</td>
    <td>admin</td>
    <td>12345679</td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
  </tr>

  <tr>
    <td>4</td>
    <td>Smith</td>
        <td>20</td>
    <td>user</td>
    <td>12345679</td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
  </tr>

  <tr>
    <td>5</td>
    <td>Nicki</td>
    <td>36</td>
    <td>admin</td>
    <td>12345679</td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
    <td class="butt-table"><buttt class="butt-ok-table">ok</buttt></td>
  </tr>
</table>
</div>

    </div>`;

export class DashboardComponent {
    static render() {
        $('#router-outlet').html(template);
    }
}