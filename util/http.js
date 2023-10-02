import axios from 'axios';

const BACKEND_URL = 'https://react-practice-53c44-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + '/expenses.json', expenseData);
}

export function fetchExpenses() {
  axios.get(BACKEND_URL + '/expenses.json');
}
