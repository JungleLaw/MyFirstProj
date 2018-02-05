const Database = require('../database/Database');

class User {
    constructor(id, username, gender, age, sign, address, mobile) {
        this.id = id;
        this.username = username;
        this.gender = gender || undefined;
        this.age = age || undefined;
        this.sign = sign || undefined;
        this.address = address || undefined;
        this.mobile = mobile || undefined;
    }

    static insertUser(username, password) {
        return new Promise(async (resolve, reject) => {
            await Database.getConnectionPool().query(`INSERT INTO users (users.username,users.password) VALUES ('${username}','${password}')`, (err, result) => {
                if (err) {
                    reject(err.toString());
                    return;
                }
                if (result['insertId']) {
                    resolve('insert suc');
                } else {
                    reject('insert fail');
                }
            });
        }).then(data => {
            return data;
        }, err => {
            return err;
        });
    }

    static findUserById(id) {
        return new Promise(async (resolve, reject) => {
            await Database.getConnectionPool().query(`SELECT * FROM users WHERE users.id = ${id}`, (err, result) => {
                if (err) {
                    reject(err.toString());
                    return;
                }
                if (result[0]) {
                    let data = result[0];
                    let user = new User(data['id'], data['username'], data['gender'], data['age'], data['sign'], data['address'], data['mobile']);
                    resolve(user);
                } else {
                    reject('not found');
                }
            });
        }).then(data => {
            return JSON.stringify(data);
        }, err => {
            return err;
        });
    }

    static findUserByName(name) {
        return new Promise(async (resolve, reject) => {
            await Database.getConnectionPool().query(`SELECT * FROM users WHERE users.username = ${name}`, (err, result) => {
                if (err) {
                    reject(err.toString());
                    return;
                }
                if (result[0]) {
                    let data = result[0];
                    let user = new User(data['id'], data['username'], data['gender'], data['age'], data['sign'], data['address'], data['mobile']);
                    resolve(user);
                } else {
                    reject('not found');
                }
            });
        }).then(data => {
            return JSON.stringify(data);
        }, err => {
            return err;
        });
    }

    static findAll() {
        return new Promise(async (resolve, reject) => {
            await Database.getConnectionPool().query(`SELECT * FROM users`, (err, result) => {
                if (err) {
                    reject(err.toString());
                    return;
                }

                if (result.length > 0) {
                    let users = Array();
                    for (let data of result) {
                        let user = new User(data['id'], data['username'], data['gender'], data['age'], data['sign'], data['address'], data['mobile']);
                        users.push(user);
                    }
                    resolve(users);
                } else {
                    reject('not found');
                }
            });
        }).then(data => {
            return JSON.stringify(data);
        }, err => {
            return err;
        });
    }
}

module.exports = User;