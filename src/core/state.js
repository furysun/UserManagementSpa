import {v4 as uuidv4} from "uuid";

export const state = {
    currentUser: null,
    selectedUserId: null,
    selectedUserIdToDelete: null,
    users: [
        {
            id: uuidv4(),
            login: 'admin',
            password: 'admin',
            name: 'Tod',
            age: 25,
            admin:true
        },
        {
            id: uuidv4(),
            login: '1',
            password: '1',
            name: 'Citti',
            age: 20,
            admin:false
        },
        {
            id: uuidv4(),
            login: 'user2',
            password: 'user2',
            name: 'Lea',
            age: 27,
            admin:false
        }
    ]
};