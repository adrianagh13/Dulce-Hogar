import React, {useEffect, useState} from 'react';
import {GeneralText, ImageButton, StarRating} from '../../atoms';
import {CardOpacity, ImgContainer, InfoContainer} from './styled';
import storage from '@react-native-firebase/storage';

export const ProviderCard = ({
  name,
  number,
  zone,
  backgroundColor,
  navigation,
  data,
  image,
}) => {
  const handleCardPress = () => {
    navigation ? navigation.navigate('ProviderCardData', {uid: data}) : null;
  };
  const handleImage = async () => {
    const storageImage = await storage().ref(image).getDownloadURL();
    setuserImage(storageImage);
  };
  console.log(image)
  const [userImage, setuserImage] = useState();
  useEffect(() => {
    handleImage();
  }, []);
  return (
    <CardOpacity activeOpacity={1} onPress={handleCardPress}>
      <ImgContainer>
        <ImageButton image={userImage} setImage={setuserImage} noEdit />
      </ImgContainer>
      <InfoContainer>
        <GeneralText title={name} size="h3" color="secondary" weight />
        <GeneralText
          title={number}
          size="h4"
          color="text"
          icon="call-outline"
        />
        <GeneralText title={zone} size="h4" color="text" />
        <StarRating
          quantity={5}
          readBoolean={true}
          startValue={4}
          backgroundColor={backgroundColor}
        />
      </InfoContainer>
    </CardOpacity>
  );
};
