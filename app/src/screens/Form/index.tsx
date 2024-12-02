import React, { useState } from "react";
import { Alert, Image } from "react-native";
import BGTop from "../../assets/BGTop.png";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import usersService from "../../services/usersService";
import {
  Container,
  Form,
  TextBlack,
  TextContainer,
  TextLink,
  TextLinkContainer,
  Wrapper,
} from "./styles";

export default function FormScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      await usersService.register(nome, email, senha);
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <Wrapper>
      <Image source={BGTop} />

      <Container>
        <Form>
          <Logo />
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
          />
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <Button
            title="Cadastrar"
            noSpacing={false}
            variant="primary"
            onPress={handleRegister}
          />
          <TextContainer>
            <TextBlack>Já tem uma conta?</TextBlack>
            <TextLinkContainer onPress={() => navigation.navigate("Login")}>
              <TextLink>Faça seu login.</TextLink>
            </TextLinkContainer>
          </TextContainer>
        </Form>
      </Container>
    </Wrapper>
  );
}
