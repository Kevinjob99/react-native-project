import { Navigation } from 'react-native-navigation';

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'my-awesome-places.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place'
      },
      {
        screen: 'my-awesome-places.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place'
      }
    ]
  });
}

export default startTabs;