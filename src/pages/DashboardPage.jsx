import Dashboard from '../components/Dashboard';

function DashboardPage({ userData }) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Your Dashboard</h1>
      <Dashboard userData={userData} />
    </div>
  );
}

export default DashboardPage;