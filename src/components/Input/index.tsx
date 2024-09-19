import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native"; 
import React from "react";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
}
 
export function Input({inputRef, ...rest}: Props) {
    //const theme = useTheme();
    const {COLORS} = useTheme(); //desestruturação

    return (
        <Container
        ref={inputRef} 
        placeholderTextColor={COLORS.GRAY_300}
        {...rest} 
        />
    );
}