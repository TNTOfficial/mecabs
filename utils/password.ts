import bcrypt from 'bcryptjs';

const saltRounds = 10;
export const saltAndHashPassword = function(password: string){
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}
