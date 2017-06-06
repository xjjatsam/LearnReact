/**
 * Created by ray on 17-6-6.
 */

import React,{ Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';

class TabMain extends Component {

    static navigationOptions = {
        tabBarLabel:'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.font}>TabNavigation展示(HomePage)</Text>
                <View style={styles.margin}>
                    <Button
                        title="Go to Setup Tab"
                        onPress={() => navigate('Setup')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margin:{
        margin:105
    },
    font:{
        marginTop:25,
        fontSize:22,
        color:'skyblue',
        fontWeight:'bold',
        textAlign:'center'
    }
});


export default TabMain;
