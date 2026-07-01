import { userDao } from "../dao/user.dao.js";

export class UserRepository{
    async createUser(userData){
        return await userDao.createUser(userData)
    }

    async getUserByEmail(email){
        return await userDao.getUserByEmail(email)
    }
}

export const userRepository = new UserRepository();