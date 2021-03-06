import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Relatorio from '../screens/Relatorio';

import ListVeiculos from '../screens/ListVeiculos';
import CadastrarVeiculo from '../screens/CadastrarVeiculo';
import ListPessoas from '../screens/ListPessoas';
import CadastrarPessoa from '../screens/CadastrarPessoa';
import DetalharViagem from '../screens/DetalharViagem';
import Sobre from '../screens/Sobre';

import { headerOptions } from './utils';
import DisposicaoAtualStack from './DisposicaoAtualStack';
import ViagemStack from './ViagemStack';
import LogoutStack from './LogoutStack';
import tabBarOptions from './tabBarOptions';
import commonStyles from '../commonStyles';
import CustomDrawerContent from './TitleDrawer';
import DetailVehicle from '../screens/DetailVehicle';
import DetailPerson from '../screens/DetailPerson';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function RelatorioStack() {
  return (
    <Stack.Navigator
      initialRouteName="Relatorio"
      screenOptions={({ navigation }) => ({
        ...headerOptions(navigation),
      })}
    >
      <Stack.Screen component={Relatorio} name="Relatorio" />
      <Stack.Screen component={DetalharViagem} name="ViagemDetalhes" />
      <Stack.Screen component={DetailVehicle} name="DetailVehicle" />
      <Stack.Screen component={CadastrarVeiculo} name="CadastrarVeiculo" />
    </Stack.Navigator>
  );
}

function HomeBottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        ...tabBarOptions,
      }}
    >
      <Tab.Screen
        component={ViagemStack}
        name="Home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-car" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={DisposicaoAtualStack}
        name="Disposicao"
        options={{
          title: 'Viagens',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-body" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={RelatorioStack}
        name="Viagens"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-albums" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function PessoasStack() {
  return (
    <Stack.Navigator
      initialRouteName="PessoasScreen"
      screenOptions={({ navigation }) => ({
        ...headerOptions(navigation, true),
      })}
    >
      <Stack.Screen component={ListPessoas} name="PessoasScreen" />
      <Stack.Screen component={DetailPerson} name="DetailPerson" />
      <Stack.Screen component={CadastrarPessoa} name="CadastrarPessoa" />
    </Stack.Navigator>
  );
}

function VeiculoStack() {
  return (
    <Stack.Navigator
      initialRouteName="VeiculosScreen"
      screenOptions={({ navigation }) => ({
        ...headerOptions(navigation, true),
      })}
    >
      <Stack.Screen component={ListVeiculos} name="VeiculosScreen" />
      <Stack.Screen component={DetailVehicle} name="DetailVehicle" />
      <Stack.Screen component={CadastrarVeiculo} name="CadastrarVeiculo" />
    </Stack.Navigator>
  );
}

export default function DrawerNavigator({ route }) {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: commonStyles.colors.secondary.main,
      }}
      drawerContent={props => (
        <CustomDrawerContent {...props} {...route.params} />
      )}
      drawerStyle={{
        width: 200,
        height: '85%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 5,
      }}
    >
      <Drawer.Screen
        component={HomeBottomTabNavigator}
        name="Home"
        options={{
          title: 'Tela Inicial',
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-home" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={PessoasStack}
        name="Pessoas"
        options={{
          title: 'Pessoas',
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-person-add" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={VeiculoStack}
        name="Veiculos"
        options={{
          title: 'Veículos',
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-car" size={25} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={Sobre}
        name="Sobre"
        options={{
          title: 'Sobre o App',
          drawerIcon: () => (
            <Ionicons name="ios-help-circle-outline" size={25} color="#00f" />
          ),
        }}
      />
      <Drawer.Screen
        component={LogoutStack}
        name="Logout"
        options={{
          title: 'Sair',
          drawerIcon: () => (
            <Ionicons
              name="ios-power"
              size={25}
              color={commonStyles.colors.danger}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
