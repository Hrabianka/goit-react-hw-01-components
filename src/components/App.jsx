
import user from '../data/user.json';
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from '../data/transactions.json';
import UserProfile from './UserProfile';
import Statistics from './Statistics';
import Friends from './Friends';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        flexDirection: 'column',
        color: '#010101'
      }}
    >
      <UserProfile 
        username={user.username}
        tag={user.tag} 
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>

      <Statistics title="Upload stats" stats={data} />

      <Friends friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
