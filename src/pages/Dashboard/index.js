import React, { useEffect, useState } from 'react';
import { Image, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  TitleContainer,
  Title,
  Avatar,
  AvatarContainer,
  SearchContainer,
  SearchButton,
  OptionsContainer,
  Banner,
  BannerContent,
  BannerTitle,
  BannerText,
  ContentTitle,
  Highlights,
  HighlightsList,
  // CategoriesList,
  MostPopular,
  NearbyList,
  ContentWithArrow,
} from './styles';

import avatar from '~/assets/avatar.png';

import home from '~/assets/home.png';
import beauty from '~/assets/beauty.png';
import pets from '~/assets/pets.png';
import party from '~/assets/party.png';

import pay from '~/assets/pay.png';

import babysitter from '~/assets/babysitters.jpg';
import barber from '~/assets/barber.png';
import dj from '~/assets/DJ.jpg';
import dogwalker from '~/assets/passeio-com-cao.jpg';
import photographer from '~/assets/fotografos.jpg';
import plumber from '~/assets/encanador.jpg';

import Search from './components/SearchInput';
import Option from './components/Option';
import Provider from './components/Provider';
import Nearby from './components/Nearby';
import Category from './components/Category';
import WithDiscount from './components/WithDiscount';

import eletricista from '~/assets/029.png';
import enfermagem from '~/assets/007.png';
import pet from '~/assets/002.png';
import designers from '~/assets/027.png';
import architects from '~/assets/020.png';
import barbers from '~/assets/030.png';

import logo from '~/assets/logo.png';

import filter from '~/assets/icon-filter.png';

Icon.loadFont();

export default function Dashboard() {
  const [categoryWidth, setCategoryWidth] = useState(90);
  const [withDiscountWidth, setWithDiscountWidth] = useState(90);
  const [optionWidth, setOptionWidth] = useState(90);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (Dimensions.get('window').width < 340) setIsSmallScreen(true);
  }, []);

  const providers = [
    {
      id: 1,
      avatar: eletricista,
      job: 'Eletricista',
      distance: 18.7,
      name: 'João Magalhães',
      oldPrice: 55,
      price: 39,
      extra: 'Instalação da TV de parede',
      extra2: '+ a instalação elétrica',
      extraOldPrice: 90,
      extraPrice: 75,
      stars: 4.4,
      starsCount: 500,
      likes: 19,
    },
    {
      id: 2,
      avatar: enfermagem,
      job: 'Enfermagem',
      distance: 11.2,
      name: 'Marcos Andrade',
      oldPrice: 120,
      price: 99,
      extra: 'Serviços de enfermagem',
      extra2: 'Pack de 4 horas por semana',
      extraOldPrice: 480,
      extraPrice: 350,
      stars: 4.6,
      starsCount: 82,
      likes: 8,
    },
    {
      id: 3,
      avatar: pet,
      job: 'Serviços Pet',
      distance: 2.4,
      name: 'Luana Figueiredo',
      oldPrice: 60,
      price: 42,
      extra: 'Passeio com o Pet',
      extra2: '2 dias por semana',
      extraOldPrice: 84,
      extraPrice: 70,
      stars: 4.4,
      starsCount: 500,
      likes: 32,
    },
  ];

  const nearby = [
    {
      id: 1,
      avatar: designers,
      job: 'Decoradores',
      distance: 2.6,
      name: 'Paulo Silva',
      oldPrice: 65,
      price: 52,
      stars: 3.9,
      starsCount: 110,
      likes: 21,
    },
    {
      id: 2,
      avatar: architects,
      job: 'Arquitetos',
      distance: 3.8,
      name: 'Luana Gomes',
      oldPrice: 88,
      price: 67,
      stars: 4.8,
      starsCount: 36,
      likes: 95,
    },
    {
      id: 3,
      avatar: barbers,
      job: 'Barbeiros',
      distance: 5.6,
      name: 'André Silva',
      oldPrice: 60,
      price: 50,
      stars: 3.9,
      starsCount: 132,
      likes: 69,
    },
  ];

  const discountJobs = [
    {
      id: 1,
      jobType: 'Jardinagem',
      job: 'Corte de Árvore e com Limpeza',
      oldPrice: 120,
      price: 60,
    },
    {
      id: 2,
      jobType: 'Limpeza doméstica',
      job: 'Limpeza de Tapete Lava e Seca',
      oldPrice: 80,
      price: 45,
    },
    {
      id: 3,
      jobType: 'Estética',
      job: 'Limpeza Profunda de Pele',
      oldPrice: 45,
      price: 30,
    },
    {
      id: 4,
      jobType: 'Serviços Pet',
      job: 'Passeio com o Cão',
      oldPrice: 40,
      price: 22,
    },
    {
      id: 5,
      jobType: 'Barbeiros',
      job: 'Corte de Barba e Cabelo',
      oldPrice: 90,
      price: 60,
    },
    {
      id: 6,
      jobType: 'Pintores',
      job: 'Pintura de Quarto com 20m²',
      oldPrice: 100,
      price: 82,
    },
  ];

  const categories = [
    {
      id: 1,
      name: 'Barbeiros',
      image: barber,
    },
    {
      id: 2,
      name: 'Babysitters',
      image: babysitter,
    },
    {
      id: 3,
      name: 'Encanadores',
      image: plumber,
    },
    {
      id: 4,
      name: 'Passeio com o Pet',
      image: dogwalker,
    },
    {
      id: 5,
      name: 'Fotógrafos',
      image: photographer,
    },
    {
      id: 6,
      name: 'DJ',
      image: dj,
    },
  ];

  return (
    <>
      <Header>
        <TitleContainer>
          <Title>
            <Image source={logo} />
          </Title>
          <AvatarContainer>
            <Avatar source={avatar} />
          </AvatarContainer>
        </TitleContainer>
        <SearchContainer>
          <Search
            placeholder="Reparação de Eletrodomésticos"
            isSmallScreen={isSmallScreen}
          />
          <SearchButton>
            {/* <Icon name="more-horizontal" size={30} color="#000" /> */}
            <Image
              source={filter}
              style={{
                width: 22.27,
                height: 24,
                alignSelf: 'center',
              }}
            />
          </SearchButton>
        </SearchContainer>
        <OptionsContainer
          onLayout={({ nativeEvent: { layout } }) => {
            setOptionWidth((layout.width - 25) / 4);
          }}
        >
          <Option
            color="#F65058"
            image={home}
            title="Para sua Casa"
            containerStyle={{ marginRight: 5 }}
            style={{ width: 33, height: 27 }}
            width={optionWidth}
            isSmallScreen={isSmallScreen}
          />
          <Option
            color="#257E89"
            image={beauty}
            title="Para o seu Bem Estar"
            containerStyle={{ marginRight: 5 }}
            style={{ width: 19, height: 28 }}
            width={optionWidth}
            isSmallScreen={isSmallScreen}
          />
          <Option
            color="#452C83"
            image={pets}
            title="Para o seu Pet"
            containerStyle={{ marginRight: 5 }}
            style={{ height: 30, width: 32 }}
            width={optionWidth}
            isSmallScreen={isSmallScreen}
          />
          <Option
            color="#9C006D"
            image={party}
            title="Para a sua Festa"
            style={{ width: 30, height: 28 }}
            width={optionWidth}
            isSmallScreen={isSmallScreen}
          />
        </OptionsContainer>
      </Header>
      <Container contentContainerStyle={{ padding: 10 }}>
        <Banner>
          <Image
            source={pay}
            style={{ alignSelf: 'center', marginRight: 15 }}
          />

          <BannerContent>
            <BannerTitle isSmallScreen={isSmallScreen}>
              Pague no Local
            </BannerTitle>
            <BannerText isSmallScreen={isSmallScreen}>
              O pagamento é efetuado diretamente ao profissional
            </BannerText>
          </BannerContent>
        </Banner>
        <Highlights>
          <ContentWithArrow>
            <ContentTitle>Destaques</ContentTitle>
            <Icon name="arrow-right" size={30} color="#490" />
          </ContentWithArrow>
          <HighlightsList
            horizontal={true}
            data={providers}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Provider info={item} />}
          />
        </Highlights>
        <Highlights
          style={{
            marginTop: 10,
            height: 280,
          }}
        >
          <ContentTitle>Mais procurados</ContentTitle>
          <MostPopular
            onLayout={({ nativeEvent: { layout } }) => {
              setCategoryWidth((layout.width - 60) / 3);
            }}
          >
            <Category
              item={categories[0]}
              width={categoryWidth}
              isSmallScreen={isSmallScreen}
            />
            <Category
              item={categories[1]}
              width={categoryWidth}
              isSmallScreen={isSmallScreen}
            />
            <Category
              item={categories[2]}
              width={categoryWidth}
              isSmallScreen={isSmallScreen}
            />
          </MostPopular>
          <MostPopular>
            <Category
              item={categories[3]}
              width={categoryWidth}
              isSmallScreen={isSmallScreen}
            />
            <Category
              item={categories[4]}
              width={categoryWidth}
              isSmallScreen={isSmallScreen}
            />
            <Category
              item={categories[5]}
              width={categoryWidth}
              isSmallScreen={isSmallScreen}
            />
          </MostPopular>
        </Highlights>
        <Highlights style={{ marginTop: 10, height: 450 }}>
          <ContentTitle>Perto de você</ContentTitle>
          <NearbyList
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data={nearby}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Nearby info={item} style={{ marginBottom: 10 }} />
            )}
          />
        </Highlights>
        <Highlights style={{ height: 520 }}>
          <ContentTitle>Até 50% de desconto</ContentTitle>
          <FlatList
            data={discountJobs}
            numColumns={2}
            style={{ flex: 1, width: '100%' }}
            contentContainerStyle={{ alignItems: 'center' }}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <WithDiscount
                info={item}
                width={withDiscountWidth}
                isSmallScreen={isSmallScreen}
              />
            )}
            onLayout={({ nativeEvent: { layout } }) => {
              setWithDiscountWidth((layout.width - 20) / 2);
            }}
          />
        </Highlights>
      </Container>
    </>
  );
}
