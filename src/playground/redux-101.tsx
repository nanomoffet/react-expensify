// Action Generators

import { createStore, Store } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy,
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy,
    };
};

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ setTo }: { setTo: number }) => ({
    type: 'SET',
    setTo,
});

// Reducers

const countReducer = (state: any = { count: 0 }, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy: number =
                typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy,
            };

        case 'DECREMENT':
            const decrementBy: number =
                typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy,
            };

        case 'SET':
            return {
                count: action.setTo,
            };

        case 'RESET':
            return {
                count: 0,
            };

        default:
            return state;
    }
};

const store: Store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ setTo: 25 }));
