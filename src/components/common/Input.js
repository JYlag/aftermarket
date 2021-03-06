import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ( { label, value, onChangeText, placeholder, secureTextEntry } ) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
      <View style={containerStyle}>
          <TextInput
              placeholder={placeholder}
              autoCorrect={false}
              style={inputStyle}
              value={value}
              onChangeText={ onChangeText }
              secureTextEntry={secureTextEntry}
          />
      </View>
    );
};

const styles = {
    inputStyle:  {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        borderRadius: 20,
        borderWidth: 0,
        alignItems: 'center'
    }
};

export {Input};