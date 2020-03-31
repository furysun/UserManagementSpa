import $ from "jquery";
import {state} from "../../core/state";

// const template =`<div>Hi, ${name}</div>`;

export class HiUserComponent {
    static render() {
        const name = state.currentUser.name;
        const template =`<div>Hi, ${name}</div>`;
        $('#router-outlet').html(template);
    }
}