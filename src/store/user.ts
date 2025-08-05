import { atom } from 'jotai';

export interface User {
    id: string;
    name: string;
    avatar?: string;
    email?: string;
}

const currentUserAtom = atom<User | null>({ id: '1', name: 'admin' });

// Set current user
export const setCurrentUserAtom = atom<null, [User | null], void>(null, (get, set, user) => {
    set(currentUserAtom, user);
});

// Get current user
export const userAtom = atom((get) => get(currentUserAtom));

// Logout atom
export const logoutAtom = atom<null, [], void>(null, (get, set) => {
    set(currentUserAtom, null);
});
