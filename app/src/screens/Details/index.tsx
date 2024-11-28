import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
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
          <Description>{job.descricao}</Description>
        </ContentContainer>

        <Button title="Entrar em contato" noSpacing={true} variant="primary" />
      </Container>
    </Wrapper>
  );
}
