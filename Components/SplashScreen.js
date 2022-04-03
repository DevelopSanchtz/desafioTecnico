import { View, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native'
import React, {useRef, useEffect} from 'react'
import Logo from '../src/assets/logoRN.png'
import COLORS from '../src/utils/color'
import IniciarSesion from '../Screens/IniciarSesion'

const SplashScreen = ( props ) => {

    
    const startAnimation = useRef(new Animated.Value(0)).current

    const scaleLogo = useRef(new Animated.Value(1)).current

    const scaleTitle = useRef(new Animated.Value(1)).current

    const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current

    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current



   useEffect(() => {
        setTimeout(() => {
            
            Animated.parallel([
                Animated.timing( 
                    startAnimation,
                    {
                        toValue: -Dimensions.get('window').height + (200),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        toValue: 0.3,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo, 
                    {
                        toValue: {
                            x: (Dimensions.get("window").width / 2) - 55,
                            y: (Dimensions.get("window").height / 2) - 120
                        }, 
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        toValue: {
                            x: 0,
                            y: (Dimensions.get("window").height / 2) - 255
                        }, 
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ]).start()
        }, 3000)
    }, [])
 
    

    return (
        <View style = {styles.container}>

            <Animated.View style  = {{ flex: 1, backgroundColor: COLORS.BLUE, zIndex: 1, transform: [ { translateY: startAnimation } ] }}>
                <Animated.View style = { styles.containerImage }>
                    <Animated.Image source = {Logo} style = {{ ...styles.Image, transform: [ {translateX: moveLogo.x}, {translateY: moveLogo.y}, {scale: scaleLogo}, ] }}></Animated.Image>
                    <Animated.Text style = {{ ...styles.Text, transform: [ {translateY: moveTitle.y}, {scale: scaleTitle} ] }}>Armando Sánchez</Animated.Text>
                </Animated.View>
            </Animated.View>

            <Animated.View style = {{...styles.BottomView, zIndex: 0, transform: [{ translateY: contentTransition }]}}>
                <IniciarSesion></IniciarSesion>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: { 
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      
  },
  containerImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  Image: {
      width: 350,
      height: 250,
      marginBottom: 20
  },
  Text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white'
  },
  BottomView: {
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    position: 'absolute',
    top: 200,
    left: 0, 
    right: 0,
  }
});

export default SplashScreen