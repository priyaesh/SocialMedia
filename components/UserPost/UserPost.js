import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const UserPost = props => {
  console.log('I am inside the userpost=====');
  console.log(props.profileImage);
  return (
    <View>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimenstions={48}
          />
        </View>
      </View>
      <View style={style.userTextContainer}>
        <Text style={style.username}>
          {props.firstName} {props.lastName}
        </Text>
        {props.location && <Text>{props.location}</Text>}
        <FontAwesomeIcon icon={faEllipsisH} />
      </View>
    </View>
  );
};
UserPost.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.any,
  likes: PropTypes.number,
  comments: PropTypes.number,
  bookmark: PropTypes.number,
  profileImage: PropTypes.any,
};
export default UserPost;
