import user from "../user.json";
import data from "../data.json";
import friends from '../friends.json';
import transactions from '../transactions.json';

import Profile from "./profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        fontSize: 14,
        color: '#010101'
      }}
    >
      React homework template
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title="Statistick" data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
