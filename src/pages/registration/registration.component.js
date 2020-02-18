import $ from "jquery";
import './registration.component.scss';

 const template = `<div id="page-two">w
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

export class RegistrationComponent {
    static render() {
        $('#router-outlet').html(template);
    }
}