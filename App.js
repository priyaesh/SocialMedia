import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
//import {asset} from './react-native.config';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Esh',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Priya',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Hamsa',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Moulesh',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jai',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Flower',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Mom',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Kate',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  console.log(userStories.map(item => item.profileImage));
  return (
    <SafeAreaView>
      <View style={globalStyle.headers}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
