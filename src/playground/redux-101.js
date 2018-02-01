import { createStore } from 'redux';
import divide from '../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/lodash-es/divide';

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

//Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count : state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count :  state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count : 0
      };
    case 'SET':
      return {
        count : action.count
      };
    default: 
    return state;
    
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 1000}));
store.dispatch(incrementCount());

