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
