import {UserCard} from './profile.styles'
import {Avatar} from "./profile.styles"
import {StatsList} from './profile.styles'
import {StatsItem} from './profile.styles'
import PropTypes from 'prop-types'; 

export const Profile = ({username, tag, location, avatar, stats}) =>{
  const {followers, views, likes}=stats

  return (
    <UserCard className="profile">
  <div className="description">
    <Avatar
      src={avatar}
      alt="User avatar"
      className="avatar"
      // width={50}px
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <StatsList className="stats">
    <StatsItem>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </StatsItem>
    <StatsItem>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </StatsItem>
  </StatsList>
</UserCard>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};