import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const QueueRoot = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='index'/>
    </Stack>
  )
}

export default QueueRoot

const styles = StyleSheet.create({})