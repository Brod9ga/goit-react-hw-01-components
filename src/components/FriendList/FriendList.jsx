import { FriendCard } from "./FriendList.style";
import { FriendCardItem } from "./FriendList.style";
import { IsOnline } from "./FriendList.style";
import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return (
      <FriendCard className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendCardItem className="item" key={id}>
            <IsOnline isOnline={isOnline}
      className={isOnline ? 'true' : 'false'}></IsOnline>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </FriendCardItem>
        ))}
      </FriendCard>
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };