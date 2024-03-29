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
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('D/M/YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('0,0[.]00 $')}</h3>
    </Link>
);

export default ExpenseListItem;