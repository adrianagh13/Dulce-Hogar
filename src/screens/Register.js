import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GeneralLink, GeneralText} from '../components/atoms';
import {GeneralHeader} from '../components/molecules/index';
import inputsMapping from '../utils/inputsMapping';
import buttonsMapping from '../utils/buttonsMapping';

const inputsRender = () => {
  const generalInputs = [
    {
      title: 'Nombre completo',
      placeholder: 'Tu nombre',
      icon: 'person',
    },
    {
      title: 'Correo',
      placeholder: 'Tu correo',
      icon: 'mail',
    },
    {
      title: 'Password',
      placeholder: 'Password',
      icon: 'key',
      secret: true,
    },
  ];

  return inputsMapping(generalInputs);
};

const buttonsRender = navigation => {
  const generalButtons = [
    {
      title: 'Registrarse',
      color: 'primary',
      action: () => navigation.navigate('Path'),
    },
    {
      title: 'Registrarse con Facebook',
      color: 'facebook',
      icon: 'logo-facebook',
    },
  ];
  return buttonsMapping(generalButtons);
};

export const Register = ({navigation}) => {
  return (
    <>
      <GeneralHeader />
      <View style={styles.registro}>
        <GeneralText
          size={'h1'}
          color={'secondary'}
          title={'Regístrate'}
          weight
        />
      </View>
      <View style={styles.center}>
        {inputsRender()}
        <View style={styles.botones}>{buttonsRender(navigation)}</View>
        <GeneralLink
          title={'¿Ya eres usuario? Inicia sesión'}
          size={'h4'}
          color={'secondary'}
          action={() => navigation.navigate('Login')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registro: {
    marginLeft: 10,
  },
  botones: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '23%',
  },
});
