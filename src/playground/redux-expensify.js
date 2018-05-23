import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id:uuid(),
    description,
    note,
    amount,
    createAt
  }
});
//REMOVE_EXPENSE
const removeExpanse = ({id}={}) => ({
  type: 'REMOVE_EXPENSE',
  id

})


//EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
//SET_TEXT_FILTER

const setTextFilter = (text ='') => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})
//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})



const expensesReducerDefault = [];
const filterReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate:undefined
}
const expensesReducer = (state = expensesReducerDefault, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=>
        id !== action.id
      );
    case 'EDIT_EXPENSE': /*grab all the exist expense, pass down all the updates state*/
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
          ...expense,
          ...action.updates
        };
      } else {
          return expense;
        };
      });
    default:
      return state
  }
};
//we do not use state.push bc we do not want to change the state
const filterReducer = (state = filterReducerDefault,action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text:action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
      case 'SET_END_DATE':
        return {
          ...state,
          endDate: action.endDate
        }
    default:
      return state
  }
};
//timestamps milliseconds
//add visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createAt>=startDate;
    const endDateMatch  = typeof endDate !== 'number' || expense.createAt<=endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy==='date'){
      return a.createAt < b.createAt ? 1 : -1;
    }
    if(sortBy==='amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
//store Creation
const store = createStore(
  combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
}));
store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100,createAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createAt:-1000}));
//store.dispatch(setTextFilter('ffe'));
store.dispatch(sortByAmount());
//store.dispatch(setStartDate(0));
//store.dispatch(setEndDate(500));
/*store.dispatch(removeExpanse({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1250));*/
const demoState = {
  expenses: [{
    id: '1',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filter: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
