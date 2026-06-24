import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { hash, compare, genSalt } from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

export async function createHash(password){
    return await hash(password, await genSalt(10))
}

export async function isValidPassword(password, hashedPassword){
    return await compare(password, hashedPassword)
}