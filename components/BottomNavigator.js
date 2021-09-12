import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const InRoute = () => <Text>In Trans</Text>;
const HomeRoiute = () => <Text>Home</Text>;
const OutRoute = () => <Text>Out Trans</Text>;

const BottomNavigator = () => {
    const [index, setIndex] = React.useState(1);
    const [routes] = React.useState([
        { key: 'in_trans', title: 'In Trans', icon: 'emoticon-outline' },
        { key: 'home', title: 'Home', icon: 'emoticon-poop-outline' },
        { key: 'out_trans', title: 'Out Trans', icon: 'emoticon-cry-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        in_trans : InRoute,
        home : HomeRoiute,
        out_trans : OutRoute,
    });

    return (
        <BottomNavigation 
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNavigator;