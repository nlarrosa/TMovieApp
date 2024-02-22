import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { CustomLogo } from '../../coponents/ui/CustomLogo';
import { CustomButton } from '../../coponents/ui/CustomButton';



export const LoginScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={ globalStyles.layout }>
        <View style={ styles.containerLogin } >
            <View style={ styles.containerLogo}>
                <CustomLogo 
                    width={175}
                    height={175}
                />
                <Text style={ styles.welcome }>Welcome..! Enter your Data</Text>
            </View>
            <View style={ styles.containerForm }>
                <TextInput 
                    style={ globalStyles.input }
                    placeholder='email'
                    keyboardType='email-address'
                    inputMode='email'
                    placeholderTextColor={'#c2c2c2'}
                />
                <TextInput 
                    style={ globalStyles.input }
                    placeholder='password'
                    keyboardType='default'
                    inputMode='text'
                    placeholderTextColor={'#c2c2c2'}
                />
                <CustomButton 
                    btnText={'SIGN IN'}
                />
                {/* <TouchableOpacity style={ globalStyles.btn }>
                    <Text style={ globalStyles.btnText }>SIGN IN</Text>
                </TouchableOpacity> */}
            </View>
            <View style={ styles.containerLinks}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={ globalStyles.btnLink}>
                    <AntDesign name='addusergroup' size={26} color={'#fff'} />
                    <Text style={ globalStyles.btnLinkText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ globalStyles.btnLink}>
                    <MaterialCommunityIcons name='form-textbox-password' size={26} color={'#fff'} />
                    <Text style={ globalStyles.btnLinkText}>RECOVER PASSWORD</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({


    containerLogin: {
        flex: 1,
        justifyContent: 'center',

    },

    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },  

    containerForm: {
        flex: 3,
        justifyContent: 'flex-start',
    },

    containerLinks: {
        flex:1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    welcome: {
        fontSize: 17,
        color: '#999',
        fontWeight: '400'
    },

})
