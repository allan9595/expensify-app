import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense)=>{
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return{
    expenses: selectExpenses(state.expenses,state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList); //determine what kind of info needs to be access in store and passdown to that component
