import { atom } from 'jotai';

const priceAtom = atom(10);
// const messageAtom = atom('hello');
// const productAtom = atom({ id: 12, name: 'good stuff' });

export const readWriteAtom = atom<number, [number], void>(
    (get) => get(priceAtom) * 2,
    (get, set, newPrice) => {
        set(priceAtom, newPrice / 2);
        // you can set as many atoms as you want at the same time
    },
);
