import $ from "jquery";
import {UserService} from "../../core/user.service";
import {ValidateUtils} from "../../core/validate.utils";

export class RegistrationValidator {
    static validate(name, age, login, password, confirmPassword) {
        let validationResults = [
            RegistrationValidator.validateName(name),
            RegistrationValidator.validateAge(age),
            RegistrationValidator.validateLogin(login),
            RegistrationValidator.validatePassword(password),
            confirmPassword ? RegistrationValidator.validateConfirmThePassword(confirmPassword) : true
        ];

        return !validationResults.some((result) => result === false);
    }

    static validateOnEdit(id, name, age, login, password, confirmPassword) {
        let validationResults = [
            RegistrationValidator.validateName(name),
            RegistrationValidator.validateAge(age),
            RegistrationValidator.validateLoginOnEdit(id, login),
            RegistrationValidator.validatePassword(password),
            confirmPassword ? RegistrationValidator.validateConfirmThePassword(confirmPassword) : true
        ];

        return !validationResults.some((result) => result === false);
    }


    static validateName(name) {
        if (ValidateUtils.isEmpty(name)) {
            $('#name-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#name-required-error-message').attr('hidden', true);
            return true;
        }
    }

    static verifyPassword(confirmThePassword) {
        const password = $('#password').val();

        if (password !== confirmThePassword) {
            $('#passwords-dont-match-error-message').attr('hidden', false);
            return false;
        } else {
            $('#passwords-dont-match-error-message').attr('hidden', true);
            return true;
        }
    }

    static checkAgeRange(age) {
        if (age < 18 || age > 110) {
            $('#invalid-age-error-message').attr('hidden', false);
            return false;
        } else {
            $('#invalid-age-error-message').attr('hidden', true);
            return true;
        }
    }

    static validateAge(age) {
        if (ValidateUtils.isEmpty(age)) {
            $('#age-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#age-required-error-message').attr('hidden', true);
            return RegistrationValidator.checkAgeRange(age);
        }
    }

    static validateLogin(login) {
        if (ValidateUtils.isEmpty(login)) {
            $('#login-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#login-required-error-message').attr('hidden', true);

            return RegistrationValidator.validateLoginExists(login);
        }
    }

    static validateLoginOnEdit(id, login) {
        if (ValidateUtils.isEmpty(login)) {
            $('#login-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#login-required-error-message').attr('hidden', true);

            const oldUser = UserService.findById(id);
            if (oldUser.login !== login) {
                return RegistrationValidator.validateLoginExists(login);
            }
        }
    }

    static validatePassword(password) {
        if (ValidateUtils.isEmpty(password)) {
            $('#password-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#password-required-error-message').attr('hidden', true);
            return true;
        }
    }

    static validateConfirmThePassword(confirmThePassword) {
        if (ValidateUtils.isEmpty(confirmThePassword)) {
            $('#confirm-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#confirm-required-error-message').attr('hidden', true);
            return RegistrationValidator.verifyPassword(confirmThePassword);
        }
    }

    static validateLoginExists(login) {
        if (UserService.isExists(login)) {
            $('#login-already-exists-error-message').attr('hidden', false);
            return false;
        } else {
            $('#login-already-exists-error-message').attr('hidden', true);
            return true;
        }
    }
}