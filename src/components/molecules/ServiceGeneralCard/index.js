import React, {useState, useEffect} from 'react';
import {ServiceStatus, GeneralContainer, GeneralText} from '../../atoms';
import {AcceptDeclineBtns, QualifyButton} from '../index';
import {GroupRow, GroupColumn, ShadowView, StarAndServiceRow} from './styled';
import ServiceCardMapping from '../../../utils/ServiceCardMapping';
import {AcceptedService} from '../index';

function qualify(status, qualifyButton) {
  if (status === 'Servicio finalizado') {
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
  data,
  uid,
  statusPrueba,
  providerUid,
  client,
  provider,
}) => {
  const [servAceptado, setServAceptado] = useState(true);
  const [mostrarBotones, setMostrarBotones] = useState(botones);
  data ? data : (data = []);

  useEffect(() => {
    if (statusPrueba === 'Done' || statusPrueba === 'Decline') {
      setMostrarBotones(false);
      setServAceptado(false);
    }
    if (statusPrueba === 'Pending') {
      setMostrarBotones(true);
      setServAceptado(false);
    }
    if (statusPrueba === 'Accepted') {
      setMostrarBotones(false);
      setServAceptado(true);
    }
  }, []);

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
        <GroupColumn>{ServiceCardMapping(data)}</GroupColumn>
        {/* mencionar botones, estrellita de qualify y service status como prop en caso de necesitarlos */}

        {mostrarBotones && (
          <AcceptDeclineBtns
            setServAceptado={setServAceptado}
            setMostrarBotones={setMostrarBotones}
            uid={uid}
          />
        )}
        {servAceptado && (
          <AcceptedService
            navigation={navigation}
            uid={uid}
            setServAceptado={setServAceptado}
            setMostrarBotones={setMostrarBotones}
          />
        )}
        <StarAndServiceRow>
          {status && <ServiceStatus status={status} />}
          {qualify(status) && (
            <QualifyButton
              navigation={navigation}
              uid={uid}
              providerUid={providerUid}
              client={client}
            />
          )}
        </StarAndServiceRow>
      </GeneralContainer>
    </ShadowView>
  );
};
