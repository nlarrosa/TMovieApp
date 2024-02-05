import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const CustomTitle = () => {

  return (
    <View style={ styles.container}>
        <Text style={ styles.textTitle}>Continue Watching</Text>
        <Text style={ styles.textBotton}>See All</Text>
    </View>
  )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        paddingVertical: 3,
        // borderWidth: 1,
        // borderColor: 'red'
    },

    textTitle: {
        color: '#fff',
        fontSize: 18
    },

    textBotton: {
        color: '#fff',
        fontSize: 14
    }
})