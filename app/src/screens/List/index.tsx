import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import VagaCard from "../../components/VagaCard";
import jobsService from "../../services/jobsService";
import { Container, ListContainer, TextVagas, Wrapper } from "./styles";

export default function List() {
  const [jobs, setJobs] = useState([]);

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
                <Text>Ainda não há nenhuma vaga cadastrada.</Text>
              </View>
            )}
          />
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
