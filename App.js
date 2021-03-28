// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider
import Frame8 from './assets/Frame8.png'
// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
          <Image source={Frame8} style={{ width: 415, height: 1050 }} />
            <Text style={styles.titleStyle}>
              
            </Text>
            <Text style={styles.paragraphStyle}>
            
            </Text>
            <Button
              title=""
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 415,

    height: 1050,
    resizeMode: 'stretch',
  },
  introTextStyle: {
    fontSize: 25,
    fontStyle: 'normal',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: '',
    title: '',
    image: require('./assets/Frame1.png'),
    backgroundColor: 'transparent',
  },
  {
    key: 's2',
    title: '',
    text: '',
    image: require('./assets/Frame5.png'),
    backgroundColor: 'transparent',
  },
  {
    key: 's3',
    title: '',
    text: '',
    image: require('./assets/Frame6.png'),
    backgroundColor: 'transparent',
  },
  {
    key: 's4',
    title: '',
    text: '',
    image: require('./assets/Frame7.png'),
    backgroundColor: 'transparent',
  },

];