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
    StyleSheet
} from 'react-native'


export default class NotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: () => (
            <Image
                source={require('../../../image/ic_launcher.png')}
                style={styles.icon}
            />
        ),
    };
    render() {
        return (
            <View >
                <Text
                    style={styles.font}
                    onPress={() => this.props.navigation.goBack()}
                >
                    drawLayout:notifications
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