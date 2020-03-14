import {state} from "./state";

export class UserService {
    static find(login, password) {
        return state.users.find((u) => u.login === login && u.password === password);
    }

    static isExists(login, password) {
        return state.users.some((u) => u.login === login && u.password === password);
    }

    static isExists(login) {
        return state.users.some((user) => user.login === login);
    }

    static add(user) {
        state.users.push(user);
    }

    static findById(id) {
        return state.users.find((u) => u.id === id);
    }

    static delete(id) {
        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].id === id) {
                state.users.splice(i, 1);
            }
        }
    }
}