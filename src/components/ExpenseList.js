import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">הוצאות</div>
            <div className="show-for-desktop">הוצאה</div>
            <div className="show-for-desktop">סכום</div>
        </div>
        <div className="list-body">
            {
                props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} {...expense} />
                ))
            }
        </div>
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters) //sorted and filtered
    };
};
export default connect(mapStateToProps)(ExpenseList);