import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createAt}</p>
  </div>
);

export default ExpenseListItem; //do not need ant state from store, only need access to the dispatch prop
