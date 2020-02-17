import $ from 'jquery';
import {LoginComponent} from "./pages/login/login.component";
import {Router} from "./router";

export function main() {
    $(() => {
        LoginComponent.render();
    });

    configRouter();
}

function configRouter() {
    window.goToLogin = Router.goToLogin;
    window.goToRegistration = Router.goToRegistration;
    window.goToAdminDashboard = Router.goToAdminDashboard;

    window.onpopstate = Router.onBrowserBack;
}

export function displayAdminDashboard() {
    const content = `<div id="page-three">
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

    $('#router-outlet').html(content);
}

export function displayRegistration() {
    const content = `<div id="page-two">
        <div class="header">
        <div>
            <img src="./assets/img/diamond.svg">
            </div>
           
        </div>
            <div class="forms">
                <div class="profile">
                     <div>
                        <input class="line" type="text" placeholder="name">
                     </div>
                     <div>
                        <input class="line" type="text" placeholder="age"></div>
                     <div>
                        <input class="line" type="text" placeholder="login"></div>
                     <div>
                        <input class="line" type="password" placeholder="password"></div>
                     <div>
                        <input class="line" type="password" placeholder="сonfirm the password"></div>
                     <div>
                        <button onclick="goToLogin()"class="prof-button">Back</button>
                     
                        <button onclick="goToAdminDashboard()" class="prof-button ok-left">Ok</button>
                     </div>
                    
                </div>
            <div
        </div>
    </div>`;

    $('#router-outlet').html(content);
}