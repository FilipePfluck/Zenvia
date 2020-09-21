import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 48px;
`;

export const Welcome = styled.Text`
    font-size: 20px;
    color: #EDEDE8;

    margin-top: 16px;
`

export const Input = styled.TextInput`
    height: 64px;
    width: 100%;
    margin-top: 24px;

    padding: 16px;
    border-radius: 8px;
    background-color: #28262E;
    color: #fff;
`

export const Button = styled(RectButton)`
    height: 64px;
    width: 100%;
    border-radius: 8px;
    background: #04D361;
    margin-top: 36px;

    justify-content: center;
    align-items: center;
`
export const ButtonText = styled.Text`
    font-size: 20px;
    color: #F0F0F5;
`