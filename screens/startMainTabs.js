import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {

  Promise.all([
    Icon.getImageSource('share', 30),
    Icon.getImageSource('search', 30),
    Icon.getImageSource('menu', 30)
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
              title: 'Menu',
              id: 'sideDrawerToggle'
            }]
          }
        }
      ],
      drawer: {
        left: {
          screen: 'my-awesome-places.SideDrawerScreen'
        }
      }
    });
  })
  
}

export default startTabs;