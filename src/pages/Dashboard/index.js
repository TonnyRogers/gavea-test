import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { logout } from '../../store/modules/auth/actions';

import {
  Container,
  Header,
  Message,
  Name,
  BusinessOptions,
  Title,
  OffersList,
  Offer,
  OfferButton,
  Welcoming,
  LogoutButton,
} from './styles';

const Dashboard = ({ route }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container>
      <Header>
        <Welcoming>
          <Message>Bem-vindo</Message>
          <Name>{user ? user.name : ''}</Name>
        </Welcoming>
        <LogoutButton onPress={handleLogout}>
          <Icon name="exit-to-app" size={24} color="#FFF" />
        </LogoutButton>
      </Header>
      <BusinessOptions>
        <Title>Vamos aos Negócios</Title>
        <OffersList>
          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>

          <Offer>
            <OfferButton>
              <Icon name="attach-money" size={50} color="#01caa9" />
            </OfferButton>
          </Offer>
        </OffersList>
      </BusinessOptions>
    </Container>
  );
};

export default Dashboard;
