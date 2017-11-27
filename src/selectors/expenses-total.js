export default (expenses) => {
  return expenses
      .map((expense) => expense.amount) // turn array of object to array of number for the reduce
      .reduce((sum, value) => sum + value, 0); // starting with 0 ->accumulator value
};
