import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
        <p>
            {numeral(amount / 100).format('0,0[.]00 $')}
            -
            {moment(createdAt).format('D/M/YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;