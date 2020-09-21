import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

import { getStatusBarHeight } from 'react-native-iphone-x-helper' 
import { Platform } from 'react-native'

export const Container = styled.View`
    flex: 1;
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
    font-size: 20px;
    margin-left: 16px;
`

export const UserAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    margin: 0 16px;
`

export const Title = styled.Text`
    margin-top: 36px;
    font-size: 24px;
    color: #F0F0F5;
`

export const Discount = styled.View`
    flex-direction: row;
    margin-top: 16px;
`

export const DiscountCuppon = styled.View`
    height: 72px;
    width: 72px;
    border-radius: 8px;
    padding: 8px;
    background: #28262E;
    margin: 0 8px;

    justify-content: center;
    align-items: center;
`

export const DiscountCupponText = styled.Text`
    font-size: 16px;
    color: #999591;
`

export const InputContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
`

export const Input = styled.TextInput`
    height: 64px;
    flex: 1;
    padding: 16px;
    border-radius: 8px;
    background-color: #28262E;
    color: #fff;
`

export const VerifyButton = styled(RectButton)`
    height: 64px;
    width: 64px;
    border-radius: 8px;
    background: #04D361;
    margin-left: 16px;

    justify-content: center;
    align-items: center;
`

export const WhatsButton = styled(RectButton)`
    height: 64px;
    width: 100%;
    border-radius: 8px;
    background: #04D361;
    margin-top: 36px;

    justify-content: center;
    align-items: center;
`

export const WhatsButtonText = styled.Text`
    font-size: 20px;
    color: #F0F0F5;
`