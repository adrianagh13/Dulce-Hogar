import React, {useState} from 'react';
import {
  GeneralText,
  GeneralButton,
  Container,
  ContainerWhite,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import DatePicker from 'react-native-date-picker';
import {CenterView} from '../styled';
import {SafeAreaView} from 'react-native';

export const DateSelection = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          title="Contratar"
          isTabRendered
          isMenuVisible
          size="h1"
          color="background"
          weight
          userType="Recruiter"
          navigation={navigation}
        />
        <CenterView>
          <GeneralText
            title="Seleccione fecha y horario"
            size="h1"
            color="secondary"
            weight
          />
          <DatePicker mode="datetime" date={date} onDateChange={setDate} />
          <GeneralButton
            title="Siguiente"
            color="secondary"
            action={() => navigation.navigate('ServiceTicket')}
          />
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
