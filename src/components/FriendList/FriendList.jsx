import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendsListItem from 'components/FriendListItem/FriendListItem';

function FriendsList({ friends }) {
  return (
    <ul className={s.friends__list}>
      {friends.map(({id,avatar,name,isOnline} )=> (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
export default FriendsList;
