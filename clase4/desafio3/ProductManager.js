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
                // if (!limit || undefined ) return infoParsed
                return [...infoParsed].slice(0, +limit)
            } else {
                return [];
            }
        } catch (error) {
            return error;
        }
    }

    async getUserById(idUser) {
        try {
            const users = await this.getUsers({});
            const user = users.find((u) => u.id === idUser);
                return user;
        
        } catch (error) {
            return error;
        }
    }

}


export const usersManager = new UsersManager('UsersAPI.json');
