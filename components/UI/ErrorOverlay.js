import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from './Button';

function ErrorOverlay({ message }) {
  return (
    <View style={styles.containter}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
