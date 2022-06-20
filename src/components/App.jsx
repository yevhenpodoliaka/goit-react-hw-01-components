import user from './data/user.json';
import statistics from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        padding: 15,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={statistics} />
<Statistics stats={statistics} />
    </div>
  );
};
