import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GitHubCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');
      
      // 验证state防止CSRF攻击
      if (!code || state !== localStorage.getItem('github_auth_state')) {
        navigate('/');
        return;
      }

      try {
        // 调用后端API交换access_token
        const response = await fetch('/api/auth/github', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code })
        });
        
        if (!response.ok) throw new Error('Auth failed');
        
        const userData = await response.json();
        localStorage.setItem('github_user', JSON.stringify(userData));
        navigate('/profile', { state: { user: userData } });
      } catch (error) {
        console.error('GitHub auth error:', error);
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate]);

  return <div className="callback-loading">Processing GitHub login...</div>;
};

export default GitHubCallback;
