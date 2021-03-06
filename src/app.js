import $ from 'jquery';
import {LoginComponent} from "./pages/login/login.component";
import 'bootstrap';
import {Router} from "./router";
import {HeaderComponent} from "./components/header/header.component";

export function main() {
    $(() => {
        HeaderComponent.render();
        // LoginComponent.render();
        Router.goToLogin();
    });
    configRouter();
}

function configRouter() {
    window.goToLogin = Router.goToLogin;
    window.goToRegistration = Router.goToRegistration;
    window.goToAdminDashboard = Router.goToAdminDashboard;
    window.goToAddUser = Router.goToAddUser;

    window.onpopstate = Router.onBrowserBack;
}
