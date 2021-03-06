import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from 'RoyalAutomobileClub/src/navigations/AppNavigator';
import {Root} from 'native-base';
import AppLoading from 'expo-app-loading';
import {fetchFonts} from './assets/styles/Fonts';
import {Provider} from 'react-redux';
import store from './src/services/redux/store';
import LocalStorage from './src/services/helper/LocalStorage';
import {I18nManager} from 'react-native';
const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const setDirection = async () => {
    const lang = await LocalStorage.get('lang');
    console.log('lllllang', lang);
    // const t = await LocalStorage.set('authToken', null);

    // t;
    if (lang === 'ar') {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } else {
      I18nManager.allowRTL(false);

      I18nManager.forceRTL(false);
    }
  };
  console.disableYellowBox = true;
  useEffect(() => {
    setDirection();
  }, []);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <Root>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Root>
    </Provider>
  );
};

export default App;
