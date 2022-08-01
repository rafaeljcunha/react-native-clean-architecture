import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  displayText: { color: theme.color.black, marginBottom: 32 },
  buttonTitleStyle: { color: theme.color.white },
});
