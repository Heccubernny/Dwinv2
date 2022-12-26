import React from 'react';
import { Text , StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
export default function AppButton({title, onPress, color='transparent' }) {
  return (
     <TouchableOpacity activeOpacity={0.7}
        underlayColor={colors.black} style={[styles.buttonContainer, {backgroundColor: colors[color]}]} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,


  },

    text: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: 3,

    },

});
