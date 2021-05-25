"use strict";

class UserStorage {
    static #users = {
        id: ["tlatn262", "sim", "심"],
        psword: ["123", "1234", "123456"],
        name: ["심서현", "심수민", "심형우"],
    };

    static getUsers(...fields) {
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;