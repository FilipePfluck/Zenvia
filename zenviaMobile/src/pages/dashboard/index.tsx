import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Feather'

import Input from '../../components/input'

import api from '../../services/api'

import Client from '../../interfaces/client'

import * as S from './styles'


const Dashboard: React.FC = () => {
    const { navigate } = useNavigation()

    const [clients, setClients] = useState<Client[]>([])
    const [filteredClients, setFilteredClients] = useState<Client[]>([])

    const [search, setSearch] = useState('')

    useEffect(()=>{
        console.log(clients)
    },[clients])

    useEffect(()=>{
        console.log(search)
    },[search])

    useEffect(()=>{
        api.get('/customers').then(response => {
            setClients(response.data)
        })
    },[])

    return(
        <S.Container>
            <S.Header>
                <S.SearchbarContainer>
                    <S.SearchBar onChangeText={text => setSearch(text)}/>
                    <Icon name="search" color="#fff" size={18}/>
                </S.SearchbarContainer>
            </S.Header>

            <S.ClientsList 
                data={clients}
                keyExtractor={(client: Client) => client.number}
                renderItem={({item: client})=>( 
                    <S.ClientContainer onPress={()=>{navigate('Client', {client})}}>
                        <S.ClientAvatar 
                            source={{uri: 'https://cdn.discordapp.com/attachments/399555129826738189/742792468365574215/KP09VUmxBAiI3AAAAAElFTkSuQmCC.png'}} 
                        />
                        <S.ClientInfo>
                            <S.ClientName>{client.name}</S.ClientName>
                        </S.ClientInfo>
                    </S.ClientContainer>
                )}
                
            >
            
            </S.ClientsList>

            <S.AddCLientButton onPress={()=>{navigate('AddClient')}}>
                <Icon name="plus" color="#fff" size={20}/>
            </S.AddCLientButton>

            <S.SendMessageButton onPress={()=>{navigate('SendMessage')}}>
                <Icon name="message-square" color="#fff" size={20}/>
            </S.SendMessageButton>
        </S.Container>
    )
}

export default Dashboard