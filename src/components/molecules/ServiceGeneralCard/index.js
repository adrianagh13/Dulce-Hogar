import React, { useState, useEffect } from 'react';
import { ServiceStatus, GeneralContainer, GeneralText } from '../../atoms';
import { AcceptDeclineBtns, QualifyButton } from '../index';
import { GroupRow, GroupColumn, ShadowView, StarAndServiceRow } from './styled';
import ServiceCardMapping from '../../../utils/ServiceCardMapping';
import serviceCardData from './ServiceCardData';
import { AcceptedService } from '../index';

function qualify(status, qualifyButton) {
  if (status === 'Servicio Finalizado') {
    qualifyButton = true;
  } else {
    qualifyButton = false;
  }
  return qualifyButton;
} 

export const ServiceGeneralCard = ({
  servicio,
  botones,
  navigation,
  status,
  qualifyButton,
}) => {
  const [servAceptado, setServAceptado] = useState(true);
  const [mostrarBotones, setMostrarBotones] = useState(botones);
  const serviceText = serviceCardData();

  return (
    <ShadowView>
      <GeneralContainer height={'160px'} width={'90%'} marginBottom={'5%'}>
        <GroupRow>
          <GeneralText
            weight
            title={servicio}
            size={'h3'}
            color={'secondary'}
            />
        </GroupRow>
        <GroupColumn>{ServiceCardMapping(serviceText)}</GroupColumn>
        {/* mencionar botones, estrellita de qualify y service status como prop en caso de necesitarlos */}

        {mostrarBotones ? (
          <AcceptDeclineBtns
          setServAceptado={setServAceptado}
          setMostrarBotones={setMostrarBotones}
          />
          ) : null}
        {!servAceptado ? <AcceptedService navigation={navigation} /> : null}

        <StarAndServiceRow>
          {status ? <ServiceStatus status={status} /> : null}
          {qualify(status) ? <QualifyButton navigation={navigation} /> : null}
        </StarAndServiceRow>
      </GeneralContainer>
    </ShadowView>
  );
};
