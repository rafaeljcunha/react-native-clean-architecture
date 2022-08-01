import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  displayText: {
    color: theme.color.black,
    marginBottom: 32,
    fontSize: theme.fontSize.xxxs,
  },
  buttonTitleStyle: { color: theme.color.white },
});
