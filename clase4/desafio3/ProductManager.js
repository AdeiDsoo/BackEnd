import fs from "fs";

class UsersManager {
    constructor(path) {
        this.path = path;
    }
    async getUsers(queryObj) {
        const { limit } = queryObj;

        try {
            if (fs.existsSync(this.path)) {
                const info = await fs.promises.readFile(this.path, "utf-8");
                const infoParsed = JSON.parse(info);
                if (!limit) return infoParsed
                return [...infoParsed].slice(0, +limit)
            } else {
                return [];
            }
        } catch (error) {
            return error;
        }
    }

    async createUser(obj) {
        try {
            const users = await this.getUsers();
            let id;
            if (!users.length) {
                id = 1;
            } else {
                id = users[users.length - 1].id + 1;
            }
            users.push({ id, ...obj });
            await fs.promises.writeFile(this.path, JSON.stringify(users));
        } catch (error) {
            return error;
        }
    }

    async getUserById(idUser) {
        try {
            const users = await this.getUsers('');
            const user = users.find((u) => u.id === idUser);

                return user;
        
        } catch (error) {
            return error;
        }
    }

    async deleteUser(idUser) {
        try {
            const users = await this.getUsers();
            const newArrayUsers = users.filter((u) => u.id !== idUser);
            await fs.promises.writeFile(this.path, JSON.stringify(newArrayUsers));
        } catch (error) {
            return error;
        }
    }
}

const user1 = {
    first_name: "Laura",
    last_name: "Suarez",
    age: 25,
    course: "JavaScript",
};

const user2 = {
    first_name: "Juan",
    last_name: "Suarez",
    age: 25,
    course: "JavaScript",
};

const user3 = {
    first_name: "Maria",
    last_name: "Suarez",
    age: 25,
    course: "JavaScript",
};

const user4 = {
    first_name: "Pedro",
    last_name: "Suarez",
    age: 25,
    course: "JavaScript",
};

// async function test() {
    // const manager1 = new UsersManager("Users.json");
//     // await manager1.createUser(user2)
//     // await manager1.deleteUser(4)
//     const users = await manager1.getUsers();
    // const user =await manager1.getUserById(2)
//     const allUsers = [...users].slice(0, +"1");
// console.log(user);
//     console.log(allUsers);
//     console.log(users, "verificando no modificar el array");
// }
// test();

export const usersManager = new UsersManager('Users.json');
