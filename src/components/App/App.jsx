import user from '../user.json';
import statistics from '../data.json';
import transactions from '../transactions.json';
import { Profile } from 'components/Profile/profile';
import { Container } from './App.styles';
import { StatCard } from 'components/Statistics/statistics';
import friends from '../friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import{TransactionHistory} from "../TransactionHistory/TransactionHistory"

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatCard
        stats={statistics}
        id={statistics.id}
        label={statistics.label}
        percentage={statistics.percentage}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
