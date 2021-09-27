import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';

const InRoute = () => <Text>In Trans</Text>;
const HomeRoute = HomeScreen;
const OutRoute = () => <Text>Out Trans</Text>;

const BottomNavigator = () => {
    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
        { key: 'in_trans', title: 'In Trans', icon: 'emoticon-outline', color:'#71a832' },
        { key: 'home', title: 'Home', icon: 'emoticon-poop-outline', color:'#e3d12d' },
        { key: 'out_trans', title: 'Out Trans', icon: 'emoticon-cry-outline', color:'#a83a32' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        in_trans : InRoute,
        home : HomeRoute,
        out_trans : OutRoute,
    });

    return (
        <BottomNavigation 
            shifting={true}
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNavigator;