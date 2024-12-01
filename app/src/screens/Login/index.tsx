import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import {
  Wrapper,
  Container,
  Form,
  TextContainer,
  TextBlack,
  TextLink,
  TextLinkContainer,
} from './styles';

import BGTop from '../../assets/BGTop.png';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login({ navigation }) {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      await signIn(email, password);
      navigation.navigate('Auth', { screen: 'Home' });
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Wrapper>
      <Image source={BGTop} />
      <Container>
        <Form>
          <Logo />
          <Input
            label='E-mail'
            placeholder='Digite seu e-mail'
            onChangeText={setEmail}
            value={email}
          />
          <Input
            label='Senha'
            placeholder='Digite sua senha'
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <Button
            title='Entrar'
            noSpacing={true}
            disabled={isLoading}
            variant='primary'
            onPress={handleLogin}
          />
          <TextContainer>
            <TextBlack>Não tem uma conta?</TextBlack>
            <TextLinkContainer
              onPress={() => navigation.navigate('FormScreen')}
            >
              <TextLink>Crie agora mesmo.</TextLink>
            </TextLinkContainer>
          </TextContainer>
        </Form>
      </Container>
    </Wrapper>
  );
}
