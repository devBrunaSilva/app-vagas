import { Feather } from "@expo/vector-icons";
import React from "react";
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

export default function Profile({ navigation }) {
  const insets = useSafeAreaInsets();
  const { signOut } = useAuth();

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
          <Input label="Nome" placeholder="digite seu nome" />
          <Input label="E-mail" placeholder="digite seu e-mail" />
          <Input label="Senha" placeholder="digite sua senha" />
        </ContentContainer>

        <Button
          title="Salvar informações"
          noSpacing={false}
          variant="primary"
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
