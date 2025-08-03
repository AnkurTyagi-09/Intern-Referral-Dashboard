import LoginForm from '../components/LoginForm';

function LoginPage({ onLogin }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;