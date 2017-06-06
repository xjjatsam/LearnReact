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




class Setup extends Component {
    static navigationOptions = {
        tabBarLabel: 'Setup',
    };

    render() {
        const { goBack } = this.props.navigation;
        return (
            <View>
                <Text style={styles.font}>TabNavigation展示(SetupPage)</Text>
                <View style={styles.margin}>
                    <Button title="Go back to home tab"
                            onPress={() => goBack()}
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

export default Setup;

