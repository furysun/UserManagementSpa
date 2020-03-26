import $ from "jquery";
import {UserService} from "../../core/user.service";
import {ValidateUtils} from "../../core/validate.utils";

export class LoginValidator {
    static validate(login, password) {
        if (LoginValidator.validateRequired(login, password)) {
            return LoginValidator.validateUserExists(login, password);
        }
    }

    static validateRequired(login, password) {
        if (ValidateUtils.isEmpty(login)|| ValidateUtils.isEmpty(password)) {
            $('#error-message-required').attr('hidden', false);
            return false;
        } else {
            return true;
        }
    }

    static validateUserExists(login, password) {
        let user = UserService.isExists(login, password);
        if (user) {
            return true;
        } else {
            $('#error-message-invalid').attr('hidden', false);
            return false;
        }
    }
}