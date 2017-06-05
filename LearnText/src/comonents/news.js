/**
 * Created by ray on 17-6-3.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 导入
import React,{ Component } from 'react';
import {
StyleSheet,
View,
Text,
} from 'react-native'

// 组件
class News extends Component {

    show(title){
      alert(title);
    }

    render() {
        // 定义数组，用于存储设定好的Text组件
        let newsComponents = [];
        // 遍历存储信息的数组，从外部传入
        for (let i in this.props.news) {
            let text = (
                <Text
                    onPress={this.show.bind(this,this.props.news[i])}
                    style={styles.news_item}
                    numberOfLines={2}
                    key={i}>
                    {this.props.news[i]}
                </Text>
            );
            // 将设置好的Text存入数组
            newsComponents.push(text);
        }
        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {newsComponents}
            </View>
        );
    }

}

// 样式
const styles = StyleSheet.create({
   flex:{
       flex:1,
   },
    news_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginTop:15,
    },
    news_item:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:30,
    },
});

export default News;