import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100 ).format('$0,0.00');
  return(
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visableExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount : visableExpenses.length,
    expenseTotal: selectExpensesTotal(visableExpenses)

  };
};

export default connect(mapStateToProps)(ExpensesSummary);
