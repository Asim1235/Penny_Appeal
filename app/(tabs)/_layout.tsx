import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import {
  screenWidth,
  screenHeight,
  fontSize,
  fontWeight,
} from "../../constants/CommonStyles";

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#EF7D00',
        tabBarLabelStyle:{
          fontSize: fontSize.verbiage_16,
          fontFamily: 'GreySansSemiBold'
        },
        tabBarStyle: {
          borderRadius: 15, // Adjust this value to set the border radius
          backgroundColor: '#ffffff', // Optional: change the background color
          elevation: 5, // Optional: add elevation (Android) for shadow effect
          shadowOpacity: 0.3, // Optional: add shadow (iOS) for shadow effect
          marginTop: -10,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/images/Home.png')} resizeMode='contain' style={{height: 24, width: 24, tintColor: focused ? 'rgba(239, 125, 0, 1)' : 'rgba(140, 144, 153, 1)'}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="autoDonate"
        options={{
          title: 'Auto Donate',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/images/repeatFA6.png')} resizeMode='contain' style={{height: 24, width: 24, tintColor: focused ? 'rgba(239, 125, 0, 1)' : 'rgba(140, 144, 153, 1)'}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="roundUp"
        options={{
          title: 'Round Up',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/images/card.png')} resizeMode='contain' style={{height: 24, width: 24, tintColor: focused ? 'rgba(239, 125, 0, 1)' : 'rgba(140, 144, 153, 1)'}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/images/chart.png')} resizeMode='contain' style={{height: 24, width: 24, tintColor: focused ? 'rgba(239, 125, 0, 1)' : 'rgba(140, 144, 153, 1)'}}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/images/profile.png')} resizeMode='contain' style={{height: 24, width: 24, tintColor: focused ? 'rgba(239, 125, 0, 1)' : 'rgba(140, 144, 153, 1)'}}/>
          ),
        }}
      />
      
      
    </Tabs>
  );
}