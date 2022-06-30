// import styled from 'styled-components';

import Profile from "../Profile/Profile";
import user from 'data/user.json';
import data from 'data/data.json';
import Statistics from "../Statistics";
import FriendList from "../FriendList/FriendList";
import friends from 'data/friends.json';
import TransactionHistory from "../TransactionHistory";
import transactions from 'data/transactions.json';
import { Container } from "./App.styled";



export const App = () => {
  return (
    <Container>
      {/* React homework template */}
  <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

<Statistics
title="Upload stats"
stats={data}
/>



<FriendList friends={friends} />





<TransactionHistory 
items={transactions} />;

    </Container>
  );
};
