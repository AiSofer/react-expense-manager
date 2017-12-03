// Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, // ES6 spread act like array.concat
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id); // with destructuring
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { //Object spreading
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense
                }
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
}
