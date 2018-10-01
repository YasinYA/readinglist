import React from 'react';
import { Item, Input, Label } from "native-base";

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry, last }) => {
  return (
    <Item floatingLabel style={{
      marginLeft: 0
    }}>
      <Label>{label}</Label>
      <Input 
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        last={last}
      />
    </Item>
  );
};

export { InputField };
