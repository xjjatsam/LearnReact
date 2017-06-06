/**
 * Created by ray on 17-6-6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
 
import React,{ Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel:"Home",
        drawerIcon:({ tinkColor }) => (
            <Image
               source={require('../../../image/ic_launcher.png')}

                style={styles.icon}
            />
        ),
    };
    render() {
        return (
            <View>
                <Text
                    style={styles.font}
                    title="Go to notifications"
                    onPress={() => this.props.navigation.navigate('Notifications')}
                >
                    DwawerLayout:Home
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    },
    font:{
        marginTop:100,
        textAlign:'center',
        fontSize:22,
        color:'red',
    }
});

