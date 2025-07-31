// 处理GitHub OAuth回调
export const handleGitHubCallback = async (code) => {
  try {
    // 1. 向你的后端发送code以交换access token
    const response = await fetch('/api/auth/github', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    
    const { access_token } = await response.json();
    
    // 2. 使用access token获取用户信息
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    
    const userData = await userResponse.json();
    
    // 3. 获取用户邮箱
    const emailResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });
    
    const emails = await emailResponse.json();
    const primaryEmail = emails.find((email) => email.primary)?.email;
    
    return {
      ...userData,
      email: primaryEmail,
    };
  } catch (error) {
    console.error('GitHub authentication failed:', error);
    throw error;
  }
};
