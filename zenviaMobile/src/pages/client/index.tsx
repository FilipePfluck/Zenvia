import React from 'react'
import { StatusBar, Linking } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import IClient from '../../interfaces/client'

import Icon from 'react-native-vector-icons/Feather'

interface RouteParams{
    client: IClient
}

import * as S from './styles'

const Client:  React.FC = () => {
    const { goBack } = useNavigation()

    const route = useRoute()
    const { client } = route.params as RouteParams

    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#28262E" />
        <S.Container>
            <S.Header>
                    <S.BackButton>
                        <Icon 
                            name="arrow-left" 
                            color="#fff" 
                            size={20}
                            onPress={()=>{goBack()}}
                        />
                    </S.BackButton>
                <S.UserAvatar source={{ uri: 'https://cdn.discordapp.com/attachments/399555129826738189/742792468365574215/KP09VUmxBAiI3AAAAAElFTkSuQmCC.png' }} />
                <S.HeaderTitle>{client.name}</S.HeaderTitle>
            </S.Header>
            <S.Content>
                {!!client.usedDiscounts && (
                    <>
                        <S.Title>Cupons de desconto</S.Title>
                        <S.Discount>
                                <S.DiscountCuppon>
                                    <S.DiscountCupponText>-10%</S.DiscountCupponText>
                                </S.DiscountCuppon>
                        </S.Discount>
                    </>
                )}

                <S.Title>Cadastrar novo cupom</S.Title>
                <S.InputContainer>
                    <S.Input placeholder="Código" placeholderTextColor="#999591"/>
                    <S.VerifyButton>
                        <Icon name="search" size={18} color="#fff"/>
                    </S.VerifyButton>
                </S.InputContainer>

                <S.WhatsButton onPress={()=>{
                    Linking.openURL(`whatsapp://send?phone=+${client.number}`)
                }}>
                    <S.WhatsButtonText>Entrar em contato</S.WhatsButtonText>
                </S.WhatsButton>
            </S.Content>
        </S.Container>
        </>
    )
}

export default Client