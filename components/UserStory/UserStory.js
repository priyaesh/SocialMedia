import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {Image} from 'react-native-svg';

const UserStory = props => {
  return (
    <View>
      <Image source={props.profileImage} />
      <Text>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStory;
