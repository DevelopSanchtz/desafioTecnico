import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { useNegociosAPI } from '../hooks/useNegociosAPI'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
import { negociosAPI } from "../Api/negociosAPI"

const Tempapi = () => {

    const [bar, guardarBar] = useState([])
    const [bares, guardarBares] = useState('')
    const [horario, guardarHorario] = useState('')
    const [ubicacion, guardarUbicacion] = useState('')
    const [telefono, guardarTelefono] = useState('')


    useEffect (() => {

        const loadNegocios = async () => {
            const url = "https://tempapi.albertoteran.com"
            const resp =  await negociosAPI.get(url)
            guardarBar(resp.data)
        }

        loadNegocios()
    }, [])

    const buscarBares = () => {
        if(bares === 'La Chilanguita Delta'){
            var valorBar = 0
            guardarHorario(bar[valorBar].Horario)
            guardarTelefono(bar[valorBar].Telefono)
            guardarUbicacion(bar[valorBar].Ubicacion)
        } else if (bares === 'La Chilanguita Roma') {
            var valorBar = 1
            guardarHorario(bar[valorBar].Horario)
            guardarTelefono(bar[valorBar].Telefono)
            guardarUbicacion(bar[valorBar].Ubicacion)
        } else if (bares === 'Cantina La 20 | Polanco') {
            var valorBar = 2
            guardarHorario(bar[valorBar].Horario)
            guardarTelefono(bar[valorBar].Telefono)
            guardarUbicacion(bar[valorBar].Ubicacion)
        }
        
    }

    return (
        <View>
            <Text style = {style.header}>NEGOCIOS MÉXICO</Text>
            <Text style = {style.textHorario}>ELIGE EL BAR</Text>
                <Picker
                selectedValue={bares}
                    onValueChange={selectBar => guardarBares(selectBar)}
                >
                    <Picker.Item label='- Seleccione - ' value= ""/>
                    
                    { bar.map( barapi => (
                        <Picker.Item label= {barapi.Nombre} value= {barapi.Nombre}/>
                    ) )

                    }

                </Picker>

                    <TouchableHighlight style = {style.btnBuscar} onPress = {() => buscarBares()}>
                        <Text style = {style.txtBuscar} >BUSCAR</Text>
                    </TouchableHighlight>

                <View style = {{paddingTop: 40}}>
                    <Text>Horarios: </Text> 
                    {horario != "" ? 
                    <Text>`Domingo: {horario.Domingo} Lunes: {horario.Lunes} Martes: {horario.Martes} Miercoles: {horario.Miercoles} Jueves: {horario.Jueves} Viernes: {horario.Viernes} Sabado: {horario.Sabado}`</Text> 
                    : <Text></Text>}

                    <Text>Ubicacion: </Text> 
                    {ubicacion != "" ? 
                    <Text>{ubicacion}</Text> 
                    : <Text></Text>}

                    <Text>Telefono: </Text> 
                    {telefono != "" ? 
                    <Text>{telefono}</Text> 
                    : <Text></Text>}
                </View>

        </View>
    )
}

const style = StyleSheet.create({
    header: {
        paddingTop: 20,
        fontFamily: 'Montserrat-Regular',
        backgroundColor: '#5E49E2',
        paddingBottom: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,
        color: "white",
        marginBottom: 30
    },
    textHorario: {
        fontFamily: 'bold',
        fontSize: 24,
        marginVertical: 20,
        marginHorizontal: 20
    },
    btnBuscar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 70,
        marginHorizontal: 20
    },
    txtBuscar: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'bold'
    }
})

export default Tempapi