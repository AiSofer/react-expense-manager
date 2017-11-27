import React from 'react';
import { Link } from 'react-router-dom';

/*
export default (props) => ( //without Destructering
    <div>
        <h3>{props.description}</h3>
        <p>{props.amount} - {props.createdAt}</p>
    </div>
*/

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => ( //WITH DESTRUCTERING
    <div>
        <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;