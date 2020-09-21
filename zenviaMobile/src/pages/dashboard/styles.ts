import { FlatList } from 'react-native'

import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper' 
import { Platform } from 'react-native'

import Client from '../../interfaces/client'

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
`

export const Header = styled.View`
    padding: 24px;
    padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight()+24 : 24}px;
    background: #28262E;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SearchbarContainer = styled.View`
    height: 48px;
    width: 100%;
    border-radius: 32px;
    background-color: #312e38;
    flex-direction: row;
    align-items: center;
    padding: 16px; 
`

export const SearchBar = styled.TextInput`
    padding: 0 8px;
    color: #fff;
    flex: 1;
`

export const HeaderTitle = styled.Text`
    color: #f4ede8;
    font-size: 20px;
    line-height: 28px;
`

export const Username = styled.Text`
    color: #FF9000;
`

export const ProfileButton = styled.TouchableOpacity`

`

export const UserAvatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 28px;
`

export const ClientsList = styled(FlatList as new () => FlatList<Client>)`
    padding: 32px 24px 16px;
    margin-bottom: 16px;
`

export const ClientsListTitle = styled.Text`
    font-size: 24px;
    margin-bottom: 24px;
    color: #F4F0F8;
`

export const ClientContainer = styled(RectButton)`
    background: #3E3B47;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 16px;
    flex-direction: row;
    align-items: center;
`

export const ClientAvatar = styled.Image`
    width: 72px;
    height: 72px;
    border-radius: 32px;
`

export const ClientInfo = styled.View`
    flex: 1;
    margin-left: 20px;
`

export const ClientName = styled.Text`
    font-size: 24px;
    color: #F4EDE8;
`

export const AddCLientButton = styled(RectButton)`
    justify-content: center;
    align-items: center;

    height: 64px;
    width: 64px;
    border-radius: 32px;

    position: absolute;
    bottom: 24px;
    right: 24px;
    background-color: #04D361;
`

export const SendMessageButton = styled(RectButton)`
    justify-content: center;
    align-items: center;

    height: 64px;
    width: 64px;
    border-radius: 32px;

    position: absolute;
    bottom: 112px;
    right: 24px;
    background-color: #04D361;
`