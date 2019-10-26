import { createContext } from 'react';

// this is a global variable that will be provided a value once the user has logged in

export const UsernameContext = createContext<string | undefined>(undefined);