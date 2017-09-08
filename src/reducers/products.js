import {List} from 'immutable';

const INITIAL_STATE = {
    catalog: List([
        {
            id: 1,
            name: 'IPhone 7',
            price: 300
        }, {
            id: 2,
            name: 'Samsung S8',
            price: 200
        }, {
            id: 3,
            name: 'Logitech Mouse',
            price: 450
        }, {
            id: 4,
            name: 'LG Monitor',
            price: 340
        }, {
            id: 5,
            name: 'Macbook Pro',
            price: 1200
        }, {
            id: 6,
            name: 'TPLink Router',
            price: 50
        }
    ])
};

export default (state = INITIAL_STATE) => {
    return state;
}