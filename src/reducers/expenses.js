//Expenses Reducer
const expensesReducerDefault = [];
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
export default expensesReducer;
