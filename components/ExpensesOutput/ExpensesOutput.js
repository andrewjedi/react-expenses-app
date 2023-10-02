import { View, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'a pair of shoes',
    amount: 59.99,
    date: new Date('2023-09-01'),
  },
  {
    id: 'e2',
    description: 'a pair of shoes',
    amount: 19.99,
    date: new Date('2023-09-05'),
  },
  {
    id: 'e3',
    description: 'a pair of shoes',
    amount: 29.99,
    date: new Date('2023-09-06'),
  },
  {
    id: 'e4',
    description: 'a pair of shoes',
    amount: 79.99,
    date: new Date('2023-09-07'),
  },
  {
    id: 'e5',
    description: 'a pair of shoes',
    amount: 129.99,
    date: new Date('2023-09-08'),
  },
  {
    id: 'e6',
    description: 'a pair of shoes',
    amount: 59.99,
    date: new Date('2023-09-01'),
  },
  {
    id: 'e7',
    description: 'a pair of shoes',
    amount: 19.99,
    date: new Date('2023-09-05'),
  },
  {
    id: 'e8',
    description: 'a pair of shoes',
    amount: 29.99,
    date: new Date('2023-09-06'),
  },
  {
    id: 'e9',
    description: 'a pair of shoes',
    amount: 79.99,
    date: new Date('2023-09-07'),
  },
  {
    id: 'e10',
    description: 'a pair of shoes',
    amount: 129.99,
    date: new Date('2023-09-08'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
