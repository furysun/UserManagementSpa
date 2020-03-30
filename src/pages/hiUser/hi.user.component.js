import $ from "jquery";

const template =`<div>Hi <3</div>`;

export class HiUserComponent {
    static render() {
        $('#router-outlet').html(template);
    }
}