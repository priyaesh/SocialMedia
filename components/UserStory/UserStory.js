import React from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
//import {Image} from 'react-native-svg';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      {/* <View style={style.userImageContainer}> */}
      {/* <Image source={props.profileImage} style={style.image} /> */}
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      />
      {/* </View> */}
      {/* <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      /> */}

      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
