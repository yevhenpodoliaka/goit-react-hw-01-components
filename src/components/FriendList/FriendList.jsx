import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendsListItem from 'components/FriendListItem/FriendListItem';

function FriendsList({ friends }) {
  return (
    <ul className={s.friends__list}>
      {friends.map(friend => (
        <FriendsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
export default FriendsList;
