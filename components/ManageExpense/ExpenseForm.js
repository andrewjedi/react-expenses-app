import { TextInput, View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangedHandler() {
    console.log('typing');
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          onChangeText: () => {},
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
        }}
      />
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
