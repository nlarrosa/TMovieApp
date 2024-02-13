import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../styles/globalStyles'
import { CustomTitle } from '../../coponents/ui/CustomTitle'

export const HomeScreen = () => {

  return (
    <View style={ globalStyles.layout}>
        <Text style={ styles.boxHeader}>boxHeader</Text>

        <View style={ styles.boxView}>
          <CustomTitle 
            title={'Continue Watching'}
          />

          <View  style={ styles.card}>
            <View style={ styles.cardImage}>
              <Image
                style={{ width: '100%', height: '100%'}}
                source={{
                  uri:  'https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
                }}
              />
            </View>
            <View style={ styles.cardInfo}>
              <Text>Title Movie</Text>
              <Text>Progress Bar</Text>
              <View>
                <Text>03:45</Text>
                <Text>05:00</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={ styles.boxCategories}>
          <CustomTitle 
            title={'Categories'}
          />
        </View>

        <View style={ styles.boxRecomend}>
          <CustomTitle 
            title={ 'Recommended For You'}
            linkPath='/recomended'
          />
        </View>
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

  card: {
    flex: 1,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row'
  },

   cardImage: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white'
   },

   cardInfo: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'white'
   }
})




