import uuid from 'uuid';
import db from '../firebase/firebase';
/* Action Creators */
// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => { // works because of redux-thunk middleware.
        // by default redux returns an OBJECT and cannot return a function.
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
          } = expenseData; // destructure.
        const expense = { description, note, amount, createdAt };

        return db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id = {} }) =>
    ({
        type: 'REMOVE_EXPENSE',
        id
    });
// EDIT_EXPENSE
export const editExpense = (id, updates) =>
    ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });