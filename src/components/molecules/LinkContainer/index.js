import React, {useContext} from 'react';
import {GeneralLink} from '../../atoms';
import {LinkBox} from './styled';
import {AuthContext} from '../../../navigation/AuthProvider';

export const LinkContainer = ({type, navigation, height}) => {
  const {logout} = useContext(AuthContext);
  const linkType = {
    Login: '¿Ya eres usuario? Inicia sesión',
    Register: '¿Eres nuevo aquí? Regístrate',
    Logout: 'Cerrar sesión',
  };
  const action = () => logout(navigation);

  return (
    <LinkBox height={height}>
      <GeneralLink
        title={linkType[type]}
        size="h4"
        color="secondary"
        action={action}
      />
    </LinkBox>
  );
};
