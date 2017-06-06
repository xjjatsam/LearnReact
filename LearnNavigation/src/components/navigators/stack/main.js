/**
 * Created by ray on 17-6-6.
 */
import React,{ Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';


class StackMain extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text style={styles.font}>
                    StackNavigator [ this is main page ]
                </Text>
                <View style = {styles.margin}>
                    <Button
                        onPress={() => navigate('Profile',{name:'Ray'})}
                        title="Go to Ray's profile"
                    />
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    margin:{
        margin:15
    },
    font:{
        marginTop:10,
        fontWeight:"bold",
        fontSize:18,
        textAlign:'center',
        color:'orange',
    }

});

export default StackMain;