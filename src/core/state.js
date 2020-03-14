import {v4 as uuidv4} from "uuid";

export const state = {
    currentUser: null,
    selectedUserId: null,
    users: [
        {
            id:  uuidv4(),
            login: 'admin',
            password: 'admin',
            name: 'Tod',
            age: 25
        },
        {
            id:  uuidv4(),
            login: 'user1',
            password: 'user1',
            name: 'Citti',
            age: 20
        },
        {
            id:  uuidv4(),
            login: 'user2',
            password: 'user2',
            name: 'Lea',
            age: 27
        }
    ]
};