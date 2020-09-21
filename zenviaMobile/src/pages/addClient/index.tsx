import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'

import * as S from './styles'

const AddClient: React.FC = () => {
    const { goBack } = useNavigation()

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
                    <S.HeaderTitle>Cadastrar Cliente</S.HeaderTitle>
                </S.Header>
                <S.Content>
                    <S.Label>Nome</S.Label>
                    <S.Input placeholder="Código" placeholderTextColor="#999591"/>

                    <S.Label>Número de whatsapp</S.Label>
                    <S.Input placeholder="Código" placeholderTextColor="#999591"/>

                    <S.Button>
                        <S.ButtonText> Cadastrar </S.ButtonText>
                    </S.Button>
                </S.Content>
            </S.Container>
        </>
    )
}

export default AddClient