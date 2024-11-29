import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Feather } from "@expo/vector-icons";
import { Company, Container, Content, Data, OpenButton, Title } from "./styles";

import { RootStackParamList } from "../../utils/Types";

interface Data {
  id: number;
  title: string;
  dataCreated: string;
  company: string;
}

type Props = NativeStackScreenProps<RootStackParamList>;

export default function VagaCard({ id, title, dataCreated, company }: Data) {
  const navigation = useNavigation<Props["navigation"]>();

  return (
    <Container onPress={() => navigation.navigate("Details", { id })}>
      <Content>
        <Title numberOfLines={1}>{title}</Title>
        <Data>
          {dataCreated &&
            new Date(dataCreated)
              .toISOString()
              .slice(0, 10)
              .split("-")
              .reverse()
              .join("/")}
        </Data>
        <Company numberOfLines={1}>{company}</Company>
      </Content>
      <OpenButton>
        <Feather name="chevron-right" size={24} color={"#3D6CB9"} />
      </OpenButton>
    </Container>
  );
}
