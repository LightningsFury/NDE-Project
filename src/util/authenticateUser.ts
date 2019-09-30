import {LoginAreaState} from '../components/LoginArea'
import { users } from '../data/users.json'
import { encode } from './encryption'
export const authenticate = (details: LoginAreaState): boolean => {
    let authenticated = false;
    for (const user of users) {
        if (user.username === details.username && encode(user.password) === details.password) authenticated = true;
    }    
    return authenticated
}