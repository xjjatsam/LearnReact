/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 
 
import React,{ Component } from 'react';
import {
StyleSheet,
View,
Text,
} from 'react-native'

class Header extends Component {

    render() {
        return (
            <View style={[styles.flex]}>
                <Text style={styles.font}>
                    <Text style={styles.tl}>网易</Text>
                    <Text style={styles.tc}>新闻</Text>
                    <Text style={styles.tr}>有态度</Text>
                </Text>
            </View>
            
        );
    }

}

const styles = StyleSheet.create({
   // 主轴默认纵向排列 所以只需设置交叉轴对其方式即可 alignItems:'center'
   flex:{
       marginTop:25,
       height:45,
       borderBottomWidth:2,
       borderBottomColor:'red',
       alignItems:'center'
   },
   font:{
       fontSize:25,
       fontWeight:'bold', // 设置粗体方式
        textAlign:'center'
   },

   tl:{
       color:'red',
   },
   tc:{
       color:'white',
       backgroundColor:'red'
   },
   tr:{
       color:'black'
   },
});

export default Header;
