import React from 'react';
import {Text,ImageBackground,View} from 'react-native'
import {Button} from 'native-base'
import '../../../Helpers/global'
import AlreadyLoginText from '../common/AlreadyLoginText'
const EnjoyExperienceView = (props) => {
    return(
        <ImageBackground style={styles.bgImage} source={require("../../../../assets/images/Intro/intro2.jpg") }>
                
                <Text style={styles.textHeader} >Enjoy the Experience</Text>
                <Text style={styles.textBody} >
                    Check out the best homestay around the world and enjoy the best moments
                </Text>
                
                <Button rounded style={styles.button} onPress={props.gotitTapHandler} >
                    <Text style={styles.button_textColor} >Got it</Text>
                </Button>
                <View style={{bottom:25}} >
                    <AlreadyLoginText loginTapHandler={props.loginTapHandler} />
                </View>
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
    
    button:{
        backgroundColor:global.primaryColor,
        width:200,
        justifyContent: 'center',
        alignSelf: 'center',
        top: 100,
    },

    button_textColor:{
        color:global.text_color_white,
        fontSize:16,
        width:'100%',
        textAlign:'center',
    }
}

export default EnjoyExperienceView