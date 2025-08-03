import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LeaderboardPage from './pages/LeaderboardPage';
import { dummyUserData } from './data/dummyData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('dashboard');
  const [userData, setUserData] = useState(dummyUserData);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUserData({ ...userData, ...JSON.parse(savedProfile) });
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userProfile');
    setIsLoggedIn(false);
    setUserData(dummyUserData);
  };

  return (
    <div className="min-h-screen animated-bg dark:animated-bg">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <>
          <nav className="gradient-bg p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">Intern Referral</h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setView('dashboard')}
                  className={`mr-4 text-white hover:underline ${view === 'dashboard' ? 'underline' : ''}`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setView('leaderboard')}
                  className={`mr-4 text-white hover:underline ${view === 'leaderboard' ? 'underline' : ''}`}
                >
                  Leaderboard
                </button>
                <button
                  onClick={() => document.documentElement.classList.toggle('dark')}
                  className="text-white hover:bg-white/20 p-2 rounded-full"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-white/20 p-2 rounded-full"
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
          {view === 'dashboard' ? (
            <DashboardPage userData={userData} />
          ) : (
            <LeaderboardPage />
          )}
        </>
      )}
    </div>
  );
}

export default App;