import {LoginAreaState} from '../components/LoginArea'
import { users } from '../data/users.json'
export const authenticated = (details: LoginAreaState): boolean => {
    let authenticated = false;
    for (const user of users) {
        if (user.username === details.username && user.password === details.password) authenticated = true;
    }    
    return authenticated
}