import { createStore } from 'redux';

const incrementCount = ({increamentBy = 1} = {}) => ({
    type: 'INCREAMENT',
    increamentBy
});

const decrementCount = ({decreamentBy = 1} = {}) => ({
    type: 'DECREAMENT',
    decreamentBy
});

const SET = ({count} = {}) => ({
    type: 'SET',
    count
});

const RESET = () => ({
    type: 'RESET'
});

/*payload is a object, you have to set the payload to a default object otherwise it will be error*/
const store = createStore((state={count:0},action)=>{
  switch(action.type){
    case 'INCREAMENT':
      return{
        count: state.count + action.increamentBy
      };
    case 'DECREAMENT':
      return{
        count: state.count - action.decreamentBy
      };
    case 'SET':
    return{
      count: action.count
    }
    case 'RESET':
      return{
        count: 0
      }
    default:
      return state;
  }
});
store.subscribe(() => {
  console.log(store.getState());
});

/*subscribe is a way to watch  the state changes in the store*/
store.dispatch(incrementCount({increamentBy : 5}))
store.dispatch(incrementCount({increamentBy : 5}))
store.dispatch(incrementCount({increamentBy : 5}))

store.dispatch(decrementCount())

store.dispatch(decrementCount({decreamentBy : 10}))
store.dispatch(RESET())

store.dispatch(SET({count:105}))
