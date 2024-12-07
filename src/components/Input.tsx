import color from '@/consts/color';
import useResponsiveSize from '@/utils/responsive';
import responsiveSize from '@/utils/responsive';
import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  DimensionValue,
} from 'react-native';

const {responsiveWidth, responsiveHeight} = useResponsiveSize();

interface InputProps extends TextInputProps {
  placeholder: string;
  value?: string;
  width?: DimensionValue;
  height?: DimensionValue;
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
    backgroundColor: color.grayBg,
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
