import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
function FriendsListItem({avatar,name ,isOnline  }) {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.status: s.offline}></span>
         
             <img className={s.avatar}src={avatar} alt={name} width="48" />
            <p className={s.name}>{ name}</p>
</li>
    )
}
FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
}
export default FriendsListItem