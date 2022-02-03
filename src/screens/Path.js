import React from 'react';
import {Container, GeneralText} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/GeneralHeader';
import {View, StyleSheet} from 'react-native';
import buttonsMapping from '../utils/buttonsMapping';
import {LinkContainer} from '../components/molecules';

const buttonsRender = navigation => {
  const action = () =>
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  const generalButtons = [
    {
      title: 'Solucionar un problema en mi hogar',
      color: 'primary',
      icon: 'home',
      size: 330,
      action: action,
    },
    {
      title: 'Ofrecer servicios de mantenimiento',
      color: 'secondary',
      icon: 'hammer',
      size: 330,
      action: action,
    },
  ];
  return buttonsMapping(generalButtons);
};

export const Path = ({navigation}) => {
  return (
    <Container>
      <GeneralHeader
        isTabRendered
        title="Bienvenido"
        color="background"
        weight
        size="h1"
      />
      <View style={styles.screen2}>
        <GeneralText
          title="¿Que te trae hoy por aqui?"
          weight="bold"
          size="h1"
          color="secondary"
        />
        <View style={styles.buttons}>{buttonsRender(navigation)}</View>
        <LinkContainer
          navigation={navigation}
          title={'Cerrar sesión'}
          action={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            })
          }
        />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  screen2: {
    height: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttons: {
    height: '25%',
    justifyContent: 'space-around',
  },
});
