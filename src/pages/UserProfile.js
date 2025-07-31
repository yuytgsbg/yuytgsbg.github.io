import { useLocation } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const { state } = useLocation();
  const user = state?.user || JSON.parse(localStorage.getItem('github_user'));

  return user ? (
    <div className="profile-container">
      <div className="profile-card">
        <img 
          src={user.avatar_url} 
          alt="User Avatar" 
          className="profile-avatar"
        />
        <h2>{user.name || user.login}</h2>
        <p className="username">@{user.login}</p>
        
        {user.bio && <p className="bio">{user.bio}</p>}
        
        <div className="profile-stats">
          {user.followers !== undefined && (
            <div className="stat-item">
              <strong>{user.followers}</strong>
              <span>Followers</span>
            </div>
          )}
          {user.public_repos !== undefined && (
            <div className="stat-item">
              <strong>{user.public_repos}</strong>
              <span>Repositories</span>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default UserProfile;
