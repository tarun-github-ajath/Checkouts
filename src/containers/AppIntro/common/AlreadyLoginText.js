import React from 'react'
import {View,Text} from 'react-native'
import {Button} from 'native-base'
import '../../../Helpers/global'

const AlreadyLoginText = (props) =>{
    return (
        <View style={styles.loginText} >
                <Text style={styles.textBody} >Already have account? </Text>
                <Button transparent onPress={props.loginTapHandler}>
                    <Text style={{color:global.text_color_dark,fontWeight:'bold'}} >Login</Text>
                </Button> 
        </View>
    )
}

const styles =  {
    textBody:{
        color:global.text_color_normal,
        fontSize:16,
    },

    loginText:{
        flexDirection: 'row',
        top:200,
        alignItems: 'center',
    }
}

export default AlreadyLoginText