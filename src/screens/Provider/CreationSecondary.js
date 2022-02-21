import React, { useState } from 'react';
import {
  GeneralInput,
  GeneralText,
  GeneralPicker,
  GeneralButton,
  ContainerWhite,
  Container,
} from '../../components/atoms';
import {GeneralHeader} from '../../components/molecules';
import {PickerWrapper, CenterView, MarginView, InputView} from '../styled';


const Form = ({data, style, beginTime, setBeginTime, finishTime, setFinishTime, handleNotes, notes}) => {
  return (
    <>
      <MarginView height={"280px"}>
        <GeneralText title="¿Cuál es tu horario de disponibilidad?" size="h2" color={'primary'} weight={'bold'}  justify={'center'} />
        <PickerWrapper>
          <GeneralPicker data={data} style={style} selected={beginTime} setSelected={setBeginTime}/>
          <GeneralPicker data={data} style={style} selected={finishTime} setSelected={setFinishTime}/>
        </PickerWrapper>
      </MarginView>
      <InputView>
        <GeneralInput
          title="Notas importantes"
          placeholder="Describe tus servicios"
          value={notes}
          onChangeText={handleNotes}
          />
      </InputView>
    </>
  );
};

export const CreationSecondary = ({navigation, route}) => {
  const [beginTime, setBeginTime] = useState('');
  const [finishTime, setFinishTime] = useState();
  const [notes, setNotes] = useState();
  const handleNotes = text => {
    setNotes(text)
  }
  const style = {
    width: '50%',
  };
  const data = [
    {
      value: '8:00',
      label: '8:00',
    },{
      value: '9:00',
      label: '9:00',
    },{
      value: '10:00',
      label: '10:00',
    },{
      value: '11:00',
      label: '11:00',
    },{
      value: '12:00',
      label: '12:00',
    },{
      value: '13:00',
      label: '13:00',
    },{
      value: '14:00',
      label: '14:00',
    },{
      value: '15:00',
      label: '15:00',
    },{
      value: '16:00',
      label: '16:00',
    },{
      value: '17:00',
      label: '17:00',
    },{
      value: '18:00',
      label: '18:00',
    },{
      value: '19:00',
      label: '19:00',
    },{
      value: '20:00',
      label: '20:00',
    },
  ];
  return (
    <ContainerWhite>
      <Container>
        <GeneralHeader
          title="Tarjeta de presentación"
          isMenuVisible
          isTabRendered
          size="h1"
          color="background"
          weight
          />
        <Form data={data} style={style} beginTime={beginTime} setBeginTime={setBeginTime} finishTime={finishTime} setFinishTime={setFinishTime} notes={notes} handleNotes={handleNotes}/>
        <CenterView>
          <GeneralButton title="Empezar" color="secondary" action={()=>navigation.navigate("ProviderPreview")}/>
        </CenterView>
      </Container>
    </ContainerWhite>
  );
};
