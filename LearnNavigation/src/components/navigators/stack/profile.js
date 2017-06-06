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

class StackProfile extends Component {
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.name,
    });
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        return (
            <View>
                <Text style={styles.font}>
                    StackNavigator [ this is profile page ]
                </Text>
                <Text style={[styles.font,{color:'red'}]}>
                    prePageParams:{this.props.navigation.state.params.name}
                </Text>

                <View style = {styles.margin}>
                    <Button
                        title='navigate'
                        onPress={()=> navigate('Main')}
                    />
                </View>

                <View style = {styles.margin}>
                    <Button
                        title='Go back'
                        onPress={()=> goBack()}
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
        color:'pink',
    }
});

export default StackProfile;