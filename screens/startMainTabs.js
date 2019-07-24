import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {

  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-add' : 'ios-add', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-search' : 'ios-search', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {    
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'my-awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [{
              icon: sources[2],
              buttonColor: '#22421D',
              title: 'Menu',
              id: 'sideDrawerToggle'
            }]
          }
        },
        {
          screen: 'my-awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [{
              icon: sources[2],
              buttonColor: '#22421D',
              title: 'Menu',
              id: 'sideDrawerToggle'
            }]
          }
        }
      ],
      appStyle: {
        tabBarSelectedButtonColor: '#22421D'
      },
      drawer: {
        left: {
          screen: 'my-awesome-places.SideDrawerScreen'
        }
      }
    });
  })
  
}

export default startTabs;