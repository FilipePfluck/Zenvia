import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

import { getStatusBarHeight } from 'react-native-iphone-x-helper' 
import { Platform } from 'react-native'


export const Container = styled.View`
    
`

export const Content = styled.View`
    padding: 24px;
    
`

export const Header = styled.View`
    padding: 24px;
    padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight()+24 : 24}px;
    background: #28262E;

    flex-direction: row;

    align-items: center;
`

export const BackButton = styled.TouchableOpacity`

`

export const HeaderTitle = styled.Text`
    color: #F4EDE8;
    font-family: 'RobotoSlab-Medium';
    font-size: 24px;
    margin-left: 16px;
`

export const Label = styled.Text`
    color: #999591;
    font-size: 16px;

    margin-top: 24px;
    margin-bottom: 8px;
`

export const Input = styled.TextInput`
    height: 64px;
    width: 100%;

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