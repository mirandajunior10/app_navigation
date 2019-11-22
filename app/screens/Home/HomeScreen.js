import styles from './styles';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
  
     navigationOptions = ({
        headerTitle: "Home",
        headerLeft: Platform.select({
          ios: null,
          android: (
            <Icon
              name="md-menu"
              type="ionicon"
              containerStyle={styles.icon}
              onPress={() => props.toggleDrawer()}
            />
          )
        })
      });

    render() {
        return (
            <View style={styles.container}>
                <Text>Esta é a tela principal.</Text>
            </View>
        );
    }
}

export default HomeScreen;
