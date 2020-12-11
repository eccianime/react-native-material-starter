import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export const styles = StyleSheet.create({
  label: {
    paddingVertical: 10,
    color: colors.lightgray
  },
  primaryButton: {
    backgroundColor: colors.primary
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  title: {
    paddingVertical: 10,
    color: colors.black,
    textAlign: "center",
    fontSize: 15, 
    textTransform: 'uppercase'
  },
  whiteCard: {
    backgroundColor: colors.white,
    width: '100%',
    padding: 20,
    borderRadius: 10
  },
});