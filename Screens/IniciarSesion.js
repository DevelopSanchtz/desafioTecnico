import React, {useState} from 'react'
import { View, Text, Animated, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import {useNavigation} from '@react-navigation/native';

import Logop from '../src/assets/logoRN.png'
import COLORS from '../src/utils/color'

const IniciarSesion = () => {
    const navigation = useNavigation();

    const [correo, setCorreo] = useState("")
    const [contrasena, setContrasena] = useState("")

    const onSubmit = () => {
        if (correo === "armando@gmail.com" && contrasena === "123") {
            navigation.navigate('Tempapi')
        } else {
            Alert.alert("Datos incorrectos")
        }
    }

    return (
            <View>
                <Text style = {styles.TextWelcome}>BIENVENIDO</Text>
                <Text style = {styles.TextLogin}>Inicio de Sesión</Text>
                    
                <View style = {[styles.FormsInput]}>
                    <Input 
                        style = {{alignItems: 'center'}}
                        //containerStyle = {{marginBottom: 20, borderBottomColor: COLORS.LIGHTPRIMARYCOLOR, borderBottomWidth: 1}}
                        inputStyle={{ fontSize:18,paddingVertical: 10,
                            paddingHorizontal:8, marginTop:12,
                            color: COLORS.PRIMARYCOLOR,
                            fontFamily:"Montserrat-Light",}}
                        placeholderTextColor={COLORS.LIGHTPRIMARYCOLOR}
                        placeholder = {"Escribe tu usuario"}
                        errorStyle = {{ color: COLORS.RED}}
                        errorMessage = {''}
                        keyboardType = 'email-address'
                        onChangeText = {e => setCorreo(e)}
                    />

                    <Input 
                        style = {{alignItems: 'center'}}
                        //containerStyle = {{marginBottom: 20, borderBottomColor: COLORS.LIGHTPRIMARYCOLOR, borderBottomWidth: 1}}
                        inputStyle={{ fontSize:18,paddingVertical: 10,
                            paddingHorizontal:8, marginTop:12,
                            color: COLORS.PRIMARYCOLOR,
                            fontFamily:"Montserrat-Light",}}
                        placeholderTextColor={COLORS.LIGHTPRIMARYCOLOR}
                        placeholder = {"Escribe tu contraseña"}
                        errorStyle = {{ color: COLORS.RED}}
                        errorMessage = {''}
                        keyboardType = {null}
                        secureTextEntry = {true}
                        onChangeText = {e => setContrasena(e)}
                    />
                    <View style = {{alignItems: 'center'}}>
                        <View style = {styles.btnMain}>
                                <TouchableOpacity onPress = {() => onSubmit() }>
                                    <Text style = {styles.btntxt}>Iniciar Sesión</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
     );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15, 
        paddingRight: 15, 
        paddingTop: 220, 
        paddingBottom: 25,  
    },
  TextWelcome: {
      color: COLORS.PURPURE,
      fontSize: 40,
      marginLeft: 40,
      fontFamily: 'bold',
      marginTop: 20
  },
  TextLogin: {
        fontFamily: 'Montserrat-regular',
      fontSize: 20,
      marginLeft: 40,
      marginTop: -5
  },
  FormsInput: {
      marginTop: 50
  },
  btnMain: {
    width: 280,
    marginTop:40,
    marginBottom: 20,
    backgroundColor: COLORS.BLUE2,
    borderRadius: 60,
    alignItems: 'center'
},
btnTransparent: {
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: COLORS.BLUE2,
    width: 280,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 60
},
btntxt: {
    textAlign: 'center',
    fontSize: 17,
    color: COLORS.WHITE,
    paddingVertical: 15,
    fontFamily: 'Poppins-Bold',
},
})

export default IniciarSesion