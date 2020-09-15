import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Container } from './styles';
import main from '~/assets/main.png';
import contracts from '~/assets/contracts.png';
import favorites from '~/assets/favorites.png';
import promotions from '~/assets/promotions.png';
import messages from '~/assets/messages.png';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Início"
      tabBarOptions={{
        activeTintColor: '#0272b2',
        inactiveTintColor: '#000',
        tabStyle: { fontFamily: 'SanFranciscoRegular' },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Dashboard}
        options={() => ({
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => <Image source={main} />,
        })}
      />
      <Tab.Screen
        name="Contratos"
        component={Dashboard}
        options={() => ({
          tabBarLabel: 'Contratos',
          tabBarIcon: ({ color }) => <Image source={contracts} />,
        })}
      />
      <Tab.Screen
        name="Favoritos"
        component={Dashboard}
        options={() => ({
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color }) => <Image source={favorites} />,
        })}
      />
      <Tab.Screen
        name="Promoções"
        component={Dashboard}
        options={() => ({
          tabBarLabel: 'Promoções',
          tabBarIcon: ({ color }) => <Image source={promotions} />,
        })}
      />
      <Tab.Screen
        name="Conversas"
        component={Dashboard}
        options={() => ({
          tabBarLabel: 'Conversas',
          tabBarIcon: ({ color }) => <Image source={messages} />,
        })}
      />
    </Tab.Navigator>
  );
}
