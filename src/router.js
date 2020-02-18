import {LoginComponent} from "./pages/login/login.component";
import {displayAdminDashboard, displayRegistration} from "./app";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

export class Router {
    static onBrowserBack(event) {
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

    static goToLogin() {
        history.pushState('page1', 'page1');
        LoginComponent.render();
    }

    static goToRegistration() {
        history.pushState('page2', 'page2');
        RegistrationComponent.render();
    }

    static goToAdminDashboard() {
        history.pushState('page3', 'page3');
        DashboardComponent.render();
    }
}