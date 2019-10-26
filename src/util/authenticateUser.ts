import {LoginAreaState} from '../ui/LoginArea/LoginArea'
import { users } from '../data/users.json'
import { encode } from './encryption'
// checks whether the username and encoded password are equal to the ones given in the database
export const authenticate = (details: LoginAreaState): boolean => {
    let authenticated = false;

    for (const user of users) {
        if (user.username === details.username && user.password === encode(details.password)) authenticated = true;
    }    
    return authenticated
}