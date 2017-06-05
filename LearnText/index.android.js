/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    AppRegistry
} from 'react-native';



import Header from './src/comonents/header';
import News from './src/comonents/news';

export default class LearnText extends Component {
  render() {
    // 定义数组存储新闻内容
      let news = [
          '1、河北雄县花季少女遭绑交赎金后被撕票 绑匪手段残忍终获法律制裁 少女遭绑交赎金后被撕票',
          '2、本报讯(记者 祖薇)国家新闻出版广电总局1日在其官网上公布了日前印发的《关于进一步加强网络视听节目创作播出管理的通知》',
          '3、本报北京6月2日电 （记者刘阳）日前，国家新闻出版广电总局印发《关于进一步加强网络视听节目创作播出管理的通知》',
          '4、马来西亚一名男子，5月29日下午3时许在卖场厕所袭击一名女子，疑似企图性侵，女子尖叫求救，结果色男遭到众人包围痛殴。',
          ];
    return (
          <View style={styles.flex}>
            <Header/>
            <News news={news}/>
          </View>

    );
  }
}

const styles = StyleSheet.create({
    flex:{
      flex:1
    }
});






AppRegistry.registerComponent('LearnText', () => LearnText);
