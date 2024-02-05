import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CustomTitle } from '../../coponents/ui/CustomTitle'

export const HomeScreen = () => {

  return (
    <View style={ globalStyles.layout}>
        <Text style={ styles.boxHeader}>boxHeader</Text>

        <View style={ styles.boxView}>
          <CustomTitle />

        </View>

        <Text style={ styles.boxCategories}>CATEGORIES</Text>

        <Text style={ styles.boxRecomend}>RECOMMEND</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  boxHeader: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#fff'
  },

  boxView: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff'
  },

  boxCategories: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff'
  },

  boxRecomend: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#fff'
  },
})




