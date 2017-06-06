/**
 * Created by ray on 17-6-6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import StackMain from './stack/main';
import StackProfile from './stack/profile';
import TabMain from './tab/main';
import Setup from './tab/profile';

import HomeScreen from './drawer/home';
import NotificationsScreen from './drawer/notifications';




import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';

const StackNav = StackNavigator({
    Main:{screen:StackMain},
    Profile:{screen:StackProfile},
});

const TabNav = TabNavigator({
    Main:{screen:TabMain},
    Setup:{screen:Setup},
});

const DrawerNav = DrawerNavigator(
    {
    Home:{screen:HomeScreen},
    Notifications:{screen:NotificationsScreen},
    },
    {
        drawerWidth: 200, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
        contentOptions: {
            initialRouteName: HomeScreen, // 默认页面组件
            activeTintColor: 'white',  // 选中文字颜色
            activeBackgroundColor: '#ff8500', // 选中背景颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {  // 样式

            }
        }
    }
);



export {
    StackNav,
    TabNav,
    DrawerNav,
}
