import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { useAuth } from "../../contexts/AuthContext";
import theme from "../../theme";
import {
  ButtonIcon,
  ButtonText,
  Container,
  ContentContainer,
  Header,
  HeaderButtonContainer,
  Wrapper,
} from "../Profile/styles";
import usersService from "../../services/usersService";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ navigation }) {
  const insets = useSafeAreaInsets();
  const { signOut, user } = useAuth();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    if(user) {
      setNome(user.name)
      setEmail(user.email)
    }
  }, [user])

  const handleEdit = async () => {
    try {
      //editar usuário
      const { token } = await usersService.update(user.id, nome , email, senha);

      const TOKEN_KEY = '@vaga_certa_token_key';

      try {
        await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(token));
      } catch (error) {
        console.error('Erro ao salvar token:', error);
      }

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Wrapper style={{ paddingTop: insets.top }}>
      <Header>
        <HeaderButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon>
            <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
          </ButtonIcon>
          <ButtonText>Voltar</ButtonText>
        </HeaderButtonContainer>
        <Logo />
      </Header>

      <Container>
        <ContentContainer>
          <Input 
            label="Nome" 
            placeholder="digite seu nome" 
            value={nome}
            onChangeText={setNome}
          />
          <Input 
            label="E-mail" 
            placeholder="digite seu e-mail" 
            value={email}
            onChangeText={setEmail}
            
          />
          <Input 
            label="Senha" 
            placeholder="digite sua senha" 
            value={senha}
            onChangeText={setSenha}
          />
        </ContentContainer>

        <Button 
          title="Salvar informações" 
          noSpacing={true} 
          variant="primary" 
          onPress={handleEdit}
        />

        <Container>
          <ContentContainer>
            <Button
              title="Sair"
              noSpacing={false}
              variant="secondary"
              onPress={signOut}
            />
          </ContentContainer>
        </Container>
      </Container>
    </Wrapper>
  );
}
