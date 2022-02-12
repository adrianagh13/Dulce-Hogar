import React from 'react';
import {GeneralHeader, OpinionComponent} from '../../components/molecules';
import {Container} from '../../components/atoms';

export const CustomerOpinions = () => {
  return (
    <Container>
      <GeneralHeader
        isTabRendered
        title="Opinion de clientes"
        color="background"
        weight
        size="h1"
        isMenuVisible
      />

      <OpinionComponent
        calification={'3'}
        customer={'Angel'}
        opinion={
          'El fontanero vino y se fue a medio trabajo, no terminó pero me dejó su herramienta, lo perdono.'
        }
      />
      <OpinionComponent
        calification={'1'}
        customer={'Fernanda'}
        opinion={
          'Llegó tarde y le olia muy feo la boca, al final me cobró mucho mas de lo que habiamos acordado, no lo recomiendo'
        }
      />
      <OpinionComponent
        calification={'5'}
        customer={'Mariela'}
        opinion={
          'Excelente servicio , 5 estrellas lo recomiendo ampliamente, cumplió con lo acordado y su trabajo fue implecable, quiero que se me descomponga otra cosa para que regrese'
        }
      />
      {/* nombre de customer y opinion se recibiran de firebase en una flat list y se envian como props al componente */}
    </Container>
  );
};
