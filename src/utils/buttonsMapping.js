import React from 'react';
import {GeneralButton} from '../components/atoms';

export default function buttonsMapping(buttonsData) {
  const buttons = buttonsData.map(
    (
      button,
      index, //button=item
    ) => {
      const spaceText = button.icon ? '  ' : '';
      return (
        <GeneralButton
          key={index}
          title={spaceText + button.title}
          color={button.color}
          icon={button.icon}
          action={button.action}
          width={button.width}
          height={button.height}
        />
      );
    },
  );
  return buttons;
}
