import $ from 'jquery';
import {LoginComponent} from "./pages/login/login.component";

import {Router} from "./router";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

export function main() {
    $(() => {
        // LoginComponent.render();
        DashboardComponent.render();
    });
    configRouter();
}

function configRouter() {
    window.goToLogin = Router.goToLogin;
    window.goToRegistration = Router.goToRegistration;
    window.goToAdminDashboard = Router.goToAdminDashboard;
    window.onpopstate = Router.onBrowserBack;
}
