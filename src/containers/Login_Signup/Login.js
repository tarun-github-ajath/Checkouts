import React,{Component} from 'react'
import {View,Text} from 'react-native'
import '../../Helpers/global'
import { Input, Item, Button } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class extends Component {

    navigateRegister = () => {
        alert('ok')
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textTitle} >Sign In</Text>
                
                <View style={styles.inputsContainer} >
                    <Item regular style={styles.input} >
                    <FontAwesome active name='user' style={styles.input_Icons} />
                        <Input placeholderTextColor={global.login_inputText_color} style={{color:global.login_inputText_color}} placeholder='Username' />
                    </Item>

                    <Item regular style={styles.input} >
                    <FontAwesome active name='lock' style={styles.input_Icons} />
                        <Input keyboardType="visible-password" placeholderTextColor={global.login_inputText_color} style={{color:global.login_inputText_color}} placeholder='Password' />
                    </Item>

                    <Button transparent>
                        <Text style={{color:global.primaryColor}} >Forgot your password?</Text>
                    </Button>

                    <Button style={styles.input_signInBtn} >
                        <Text style={{color:global.text_color_white,paddingLeft:130,paddingRight:130}} >SIGN IN</Text>
                    </Button>

                    <View style={{marginTop:20}}>
                        <View style={styles.line}/>
                        <Text style={styles.orText}>Or</Text>
                    </View>

                    <View style={styles.socialPlatformIcons_container}>
                        <FontAwesome name='google-plus' style={styles.socialPlatform_icon} />
                        <FontAwesome name='twitter' style={styles.socialPlatform_icon} />
                        <FontAwesome name='facebook' style={styles.socialPlatform_icon} />
                    </View>

                        <Button transparent 
                        style={styles.registerBtn}
                        onPress={this.navigateRegister.bind(this)}>
                            <Text style={{color:global.primaryColor,alignSelf:'center'}} >REGISTER</Text>
                        </Button>
                   

                </View>

            </View>
        )
    }
}

const styles = {
    container:{
        flex:1,
        alignItems: 'center',
        
    },

    textTitle:{
        color:global.primaryColor,
        fontSize:25
    },

    inputsContainer:{
        width:global.deviceWidth,
        padding:10,
        flex:1,
    },
    input:{
        backgroundColor:'#a8a8a8',
        color:global.login_inputText_color,
        borderRadius: 3,
        marginBottom: 10,
    },
    
    input_Icons:{
        fontSize:20,
        color:global.login_inputText_color,
        marginLeft: 10,
    },

    input_signInBtn:{
        alignSelf: 'center',
        height:50,
        backgroundColor:global.primaryColor,
        borderRadius:5
    },

    line:{
        alignSelf:'center',
        position:'absolute',
        borderBottomColor:global.primaryColor,
        borderBottomWidth:1,
        height:'50%',
        width:'100%'
    },

    orText:{
        alignSelf:'center',
        paddingHorizontal:5,
        color:global.primaryColor,
        fontSize:18,
        backgroundColor:"#fff"
    },

    socialPlatformIcons_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:20
    },

    socialPlatform_icon:{
        color:global.primaryColor,
        fontSize:35
    },

    registerBtn:{
        position:'absolute',
        bottom:0,
        left:0,
        right: 0,
        justifyContent: 'center', 
        alignItems: 'center'
    }
}