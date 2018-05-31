import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100 ).format('$0,0.00');
  return(
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
        <Link className ="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visableExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visableExpenses.length,
    expenseTotal: selectExpensesTotal(visableExpenses)

  };
};

export default connect(mapStateToProps)(ExpensesSummary);
