import { StyleSheet, View, Text } from 'react-native';
import Input from './Input';
import { useState } from 'react';

function ExpenseForm() {
  const [amountValue, setAmountValue] = useState('');

  function amountChangedHandler(enteredAmount) {
    console.log('typing');
    setAmountValue(enteredAmount);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            onChangeText: () => {},
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          onChangeText: () => {},
          placeholder: '',
          multiline: true,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
});
