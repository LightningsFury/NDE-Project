import {LoginAreaState} from '../ui/LoginArea/LoginArea'
import { users } from '../data/users.json'
import { encode } from './encryption'
export const authenticate = (details: LoginAreaState): boolean => {
    let authenticated = false;
    console.log(encode(details.password))
    for (const user of users) {
        if (user.username === details.username && user.password === encode(details.password)) authenticated = true;
    }    
    return authenticated
}