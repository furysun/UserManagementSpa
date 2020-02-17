import $ from 'jquery';
import {LoginComponent} from "./pages/login/login.component";

export function main() {
    $(() => {
        LoginComponent.render();
    });

    window.goToLogin = goToLogin;
    window.goToRegistration = goToRegistration;
    window.goToAdminDashboard = goToAdminDashboard;
    window.onpopstate = onBrowserBack;
}

function onBrowserBack(event) {
    const state = event.state;
    console.log(event.state);
    if (state === 'page1') {
        LoginComponent.render();
    } else if (state === 'page2') {
        displayRegistration();
    } else if (state === 'page3') {
        displayAdminDashboard();
    }
}

function goToLogin() {
    history.pushState('page1', 'page1');
    LoginComponent.render();
}

function goToRegistration() {
    history.pushState('page2', 'page2');
    displayRegistration();
}

function goToAdminDashboard() {
    history.pushState('page3', 'page3');
    displayAdminDashboard();
}

function displayAdminDashboard() {
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

function displayRegistration() {
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

// function displayLoginPage() {

//     const content = `<div id="page-one">
// <div class="header">
//     <img src="./assets/img/diamond.svg">
// </div>
//
// <div class="forms">
//     <div class="form-log-passw">
//     <div class="log-form">
//         <div class="lll"><p>login</p>
//             <input class="login" type="text"></div>
//         <div class="pass"><p>password</p>
//             <input class="password" type="password">
//         </div>
//         <div class="ok-butt">
//             <button onclick="goToAdminDashboard()" class="button-ok">Ok</button>
//         </div>
//
//         <div onclick="goToRegistration()"class="reg-butt"><button class="button-registr">Registration</button></div>
//         </div>
//     </div>
//
// </div>
//     </div>`;
//     $('#router-outlet').html(content);
// }