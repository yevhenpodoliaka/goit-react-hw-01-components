import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultAvatar from './default-avatar.png';

function Profile({ username, tag, location, avatar = defaultAvatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Profile;
