import React from 'react';
import {Text,ImageBackground} from 'react-native'
import '../../../Helpers/global'
import AlreadyLoginText from '../common/AlreadyLoginText'
const HomestayView = (props) => {
    return(
        <ImageBackground style={styles.bgImage} source={require("../../../../assets/images/Intro/intro1.jpg") }>
                <Text style={styles.textHeader} >Look for Homestay</Text>
                <Text style={styles.textBody} >You can travel anywhere in india and look for most affordable homestays</Text>
                
                <AlreadyLoginText loginTapHandler={props.loginTapHandler} />
                
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

export default HomestayView