import useResponsiveSize from '@/utils/responsive';
import responsiveSize from '@/utils/responsive';
import React from 'react';
import {TextInput, StyleSheet, TextInputProps, View} from 'react-native';

const {responsiveWidth, responsiveHeight} = useResponsiveSize();

interface InputProps extends TextInputProps {
  placeholder: string;
  value?: string;
  width?: number | string;
  height?: number | string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  width,
  height,
  ...props
}) => {
  return (
    <View
      style={[
        styles.inputContainer,
        {
          width: width,
          height: height,
        },
      ]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value?.toString()}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 32,
    backgroundColor: '#f8f8f8',
    display: 'flex',
  },
  textInput: {
    fontSize: 16,
    width: '100%',
    color: '#A0A0A0',
    paddingHorizontal: responsiveWidth(20),

    flex: 1,
  },
});
