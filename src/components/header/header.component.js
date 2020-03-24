import $ from "jquery";
import './header.component.scss';
import {state} from "../../core/state";
import {Router} from "../../router";

export class HeaderComponent {
    static render() {
        let template = `
        <img src="./assets/img/diamond.svg">`;

        if (state.currentUser) {
            template += `<button onclick="logout()"  class="btn form-element form-button log-out">Log out</button>`;
        }

        $('#header').html(template);
        window.logout = HeaderComponent.logout;
    }

    static logout() {
        state.currentUser = null;
        HeaderComponent.render();
        Router.goToLogin();
    }
}

