import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import VagaCard from "../../components/VagaCard";
import jobsService from "../../services/jobsService";
import { Container, ListContainer, TextVagas, Wrapper } from "./styles";

export default function List() {
  const [jobs, setJobs] = useState([]);

  const DATA = [
    {
      id: 1,
      titulo: "Desenvolvedor Front-end",
      data_cadastro: "2024-06-21",
      empresa: "Tech Solutions",
    },
    {
      id: 2,
      titulo: "Analista de Dados",
      data_cadastro: "2024-06-18",
      empresa: "Data Insights",
    },
    {
      id: 3,
      titulo: "Gerente de Projetos",
      data_cadastro: "2024-06-15",
      empresa: "Project Masters",
    },
    {
      id: 4,
      titulo: "Gerente de Projetos",
      data_cadastro: "2024-06-15",
      empresa: "Project Masters",
    },
    {
      id: 5,
      titulo: "Gerente de Projetos",
      data_cadastro: "2024-06-15",
      empresa: "Project Masters",
    },
    {
      id: 6,
      titulo: "Gerente de Projetos",
      data_cadastro: "2024-06-15",
      empresa: "Project Masters",
    },
    {
      id: 7,
      titulo: "Gerente de Projetos",
      data_cadastro: "2024-06-15",
      empresa: "Project Masters",
    },
  ];

  useEffect(() => {
    jobsService.getAll().then((response) => {
      setJobs(response.data.jobs);
    });
  }, []);

  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />

      <Container>
        <Logo />
        <TextVagas>{jobs.length} vagas encontradas!</TextVagas>
        <ListContainer>
          <FlatList
            data={jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <VagaCard
                id={item.id}
                title={item.titulo}
                dataCreated={item.dataCadastro}
                company={item.empresa}
              />
            )}
            showsVerticalScrollIndicator={true}
            ListEmptyComponent={() => (
              <View>
                <Text>Você ainda não tem tarefas cadastradas</Text>
                <Text>Crie tarefas e organize seus itens a fazer.</Text>
              </View>
            )}
          />
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
