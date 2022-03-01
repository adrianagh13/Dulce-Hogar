import React from 'react';
import {GeneralHeader, ServiceGeneralCard} from '../../components/molecules';
import {ScrollView} from 'react-native';
import { Container, ContainerWhite } from '../../components/atoms';

export const UpcomingServices = ({navigation}) => {
  return (
    <ContainerWhite>
      <Container>
        <SafeAreaView />
        <GeneralHeader
          isTabRendered
          title="Servicios Pendientes"
          color="background"
          weight
          size="h1"
          isMenuVisible
          userType="Provider"
          navigation={navigation}
        />
        <ScrollView>
          <ServiceGeneralCard servicio={'Fontanero'} botones />
        </ScrollView>
      </Container>
    </ContainerWhite>
  );
};
