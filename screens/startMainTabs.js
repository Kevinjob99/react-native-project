import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {

  Promise.all([
    Icon.getImageSource('share', 30),
    Icon.getImageSource('search', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'my-awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[0]
        },
        {
          screen: 'my-awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[1]
        }
      ]
    });
  })
  
}

export default startTabs;