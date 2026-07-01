import { userDao } from "../dao/user.dao.js";

export class UserRepository{
    async createUser(userData){
        return await userDao.createUser(userData)
    }

    async getAllUsers(){
        return await userDao.getAll();
    }

    async getUserByEmail(email){
        return await userDao.getUserByEmail(email)
    }

    async getUserById(id){
        return await userDao.getById(id)
    }
}

export const userRepository = new UserRepository();