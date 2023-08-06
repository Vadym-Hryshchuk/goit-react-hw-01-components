import user from '../IncomingData/user.json';
import data from '../IncomingData/data.json';
import friends from '../IncomingData/friends.json';
import transactions from '../IncomingData/transactions.json';

import { Profile } from './Profile/Profile';
import { HomeworkTitle } from './HomeworkTitle/HomeworlTitle';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <HomeworkTitle>Homework 1: "Profile"</HomeworkTitle>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <HomeworkTitle>Homework 1: "Statistics"</HomeworkTitle>
      <Statistics title="Upload stats" stats={data} />
      <HomeworkTitle>Homework 1: "FriendList"</HomeworkTitle>
      <FriendList friends={friends} />
      <HomeworkTitle>Homework 1: "TransactionHistory"</HomeworkTitle>
      <TransactionHistory items={transactions} />
    </>
  );
};
