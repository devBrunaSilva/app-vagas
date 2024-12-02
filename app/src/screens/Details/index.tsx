import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";
import { Button } from "../../components/Button";
import Logo from "../../components/Logo";
import jobsService from "../../services/jobsService";
import theme from "../../theme";
import {
  ButtonIcon,
  ButtonText,
  Container,
  ContentContainer,
  Description,
  DetailsText,
  Header,
  HeaderButtonContainer,
  Title,
  Wrapper,
} from "../Details/styles";

type JobType = {
  id: number;
  titulo: string;
  descricao: string;
  dataCadastro: string;
  telefone: string;
  status: string;
  empresa: string;
};

export default function Details({ route, navigation }) {
  const { id } = route.params;
  const [job, setJob] = useState<JobType>({} as JobType);

  useEffect(() => {
    jobsService.get(id).then((response) => {
      setJob(response.data.job);
    });
  }, []);

  const handleContact = () => {
    const whatsappUrl = `https://wa.me/${job.telefone}`;
    Linking.openURL(whatsappUrl).catch(() => {
      alert("Não foi possível abrir o WhatsApp. Verifique se o número está correto ou se o WhatsApp está instalado.");
    });
  };



  return (
    <Wrapper>
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
          <Title>{job.titulo}</Title>
          <DetailsText>{job.empresa}</DetailsText>
          <Description>{job.descricao}</Description>
          
        </ContentContainer>

        {job.status == 'aberto' && (
          <Button title="Entrar em contato" noSpacing={true} variant="primary" onPress={handleContact}/>
        )}
      </Container>
    </Wrapper>
  );
}
