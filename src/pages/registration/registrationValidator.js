import $ from "jquery";
import {state} from "../../core/state";
import {UserService} from "../../core/user.service";

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
        if (name === null || name === '') {
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
        if (age === null || age === '') {
            $('#age-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#age-required-error-message').attr('hidden', true);
            return RegistrationValidator.checkAgeRange(age);
        }
    }

    static validateLogin(login) {
        if (login === null || login === '') {
            $('#login-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#login-required-error-message').attr('hidden', true);

            return RegistrationValidator.validateLoginExists(login);
        }
    }

    static validateLoginOnEdit(id, login) {
        if (login === null || login === '') {
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
        if (password === null || password === '') {
            $('#password-required-error-message').attr('hidden', false);
            return false;
        } else {
            $('#password-required-error-message').attr('hidden', true);
            return true;
        }
    }

    static validateConfirmThePassword(confirmThePassword) {
        if (confirmThePassword === null || confirmThePassword === '') {
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