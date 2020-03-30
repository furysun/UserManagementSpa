import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AddEditUserComponent} from "./pages/addEditUser/add.edit.user.component";
import {HiUserComponent} from "./pages/hiUser/hi.user.component";

const loginPageState = 'loginPageState';
const registrationPageState = 'registrationPageState';
const adminDashboardPageState = 'adminDashboardPageState';
const addUserPageState = 'addUserPageState';
const hiUserPageState = 'hiUserPageState';

export class Router {
    static onBrowserBack(event) {
        const state = event.state;
        const routes = {
            loginPageState: LoginComponent.render,
            registrationPageState: RegistrationComponent.render,
            adminDashboardPageState: DashboardComponent.render,
            addUserPageState: AddEditUserComponent.render,
            hiUserPageState:  HiUserComponent.render
        };
        console.log('redirect to '+ state );
        routes[state]();
    }

    static goToLogin() {
        history.pushState(loginPageState, loginPageState);
        LoginComponent.render();
    }

    static goToRegistration() {
        history.pushState(registrationPageState, registrationPageState);
        RegistrationComponent.render();
    }

    static goToAdminDashboard() {
        history.pushState(adminDashboardPageState, adminDashboardPageState);
        DashboardComponent.render();
    }

    static goToAddUser() {
        history.pushState(addUserPageState, addUserPageState);
        AddEditUserComponent.render();
    }

        static goToHiUser() {
        history.pushState(hiUserPageState, hiUserPageState);
        HiUserComponent.render();
    }
}