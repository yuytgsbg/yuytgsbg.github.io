 { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const { state } = useLocation();
  const user = state?.user || JSON.parse(localStorage.getItem('github_user'));

  return user ? (
    <div>
      <img src={user.avatar_url} alt="Avatar" />
      <h2>{user.name}</h2>
      <p>@{user.login}</p>
      {user.email && <p>Email: {user.email}</p>}
    </div>
  ) : null;
};
