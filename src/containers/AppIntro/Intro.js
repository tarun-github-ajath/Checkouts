import React,{Component} from 'react';
import {View,ImageBackground,Text} from 'react-native'
import '../../Helpers/global'
import SignupView from './pagerViews/SignupView'
import HomestayView from './pagerViews/HomestayView'
import EnjoyExperienceView from './pagerViews/EnjoyExperienceView'
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

export default class Intro extends Component {

    componentDidMount(){
        // this.props.navigation.navigate('login')
    }
    _renderDotIndicator() {
        return <PagerDotIndicator selectedDotStyle={styles.selectedDotStyle} pageCount={3} />;
    }

    navigateLoginScreen = () => {
        this.props.navigation.navigate('login')
    }

    initHome = () =>{
        alert('home')
    }

    render(){
        return(
                <IndicatorViewPager
                    style={styles.viewPager}
                    indicator={this._renderDotIndicator()}>

                    <View>
                        <SignupView loginTapHandler={this.navigateLoginScreen.bind(this)} />
                    </View>

                    <View>
                        <HomestayView loginTapHandler={this.navigateLoginScreen.bind(this)}/>
                    </View>

                    <View>
                        <EnjoyExperienceView 
                        loginTapHandler={this.navigateLoginScreen.bind(this)}
                        gotitTapHandler={this.initHome.bind(this)}
                        />
                    </View>

                </IndicatorViewPager>
        )
    }
}

const styles =  {
    viewPager: {
        flex:1

    },
   
    selectedDotStyle:{
        backgroundColor:'#000'
    }
}