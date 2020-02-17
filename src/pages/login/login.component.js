import $ from "jquery";
import './login.component.scss';

const template = `
    <div id="page-one">
        <div class="header">
            <img src="./assets/img/diamond.svg">
        </div>
    
        <div class="forms">
            <div class="form-log-passw">
            <div class="log-form">
                <div class="lll"><p>login</p>
                    <input class="login" type="text"></div>
                <div class="pass"><p>password</p>
                    <input class="password" type="password">    
                </div>
                <div class="ok-butt">
                    <button onclick="goToAdminDashboard()" class="button-ok">Ok</button>
                </div>
                
                <div onclick="goToRegistration()"class="reg-butt"><button class="button-registr">Registration</button></div>
                </div>
            </div>    
        </div>
    </div>`;

export class LoginComponent {
    static render() {
        $('#router-outlet').html(template);
    }
}