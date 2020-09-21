import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native'

import * as S from './styles';

const Login: React.FC = () => {
  const inputRef = useRef<any>()

  const [phone, setPhone] = useState('')

  const {navigate} = useNavigation()

  return (
    <S.Container>
      <S.Welcome>
        Bem vindo à Fidelizenvia.
      </S.Welcome>
      <S.Welcome>
        Para começar, basta inserir o número de whatsapp da sua loja.
      </S.Welcome>
      
      <S.Input ref={inputRef}  onChangeText={number => {setPhone(number)}}/>
      <S.Button onPress={()=>{navigate('Dashboard')}}>
        <S.ButtonText>
          Entrar
        </S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default Login;
