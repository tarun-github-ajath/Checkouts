import React from 'react';
import {View,Text,Image,ImageBackground} from 'react-native'
import '../../../Helpers/global'
import { Button } from 'native-base';
import AlreadyLoginText from '../common/AlreadyLoginText'
const SignupView = (props) => {
    return(
            <ImageBackground style={styles.bgImage} source={require("../../../../assets/images/Intro/intro2.jpg") }>
                <Text style={styles.textHeader} >Sign to the App</Text>
                <Text style={styles.textBody} >Use your email or phone number to signin and get access to all the features</Text>
                
               <AlreadyLoginText loginTapHandler={props.loginTapHandler}  />
                
            </ImageBackground>
    )
}

const styles =  {
    bgImage:{
        height:'100%',
        width:'100%',
        alignItems:  'center',
        justifyContent: 'center',
    },
    textHeader: {
        color:global.text_color_dark,
        fontSize:20,
    },

    textBody:{
        color:global.text_color_normal,
        fontSize:16,
        textAlign:'center',
        margin: 15,
    },

    
}

export default SignupView