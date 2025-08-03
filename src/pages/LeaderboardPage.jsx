import Card from '../components/common/Card';
import { dummyLeaderboard } from '../data/dummyData';

function LeaderboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-white">Leaderboard</h1>
      <Card title="Top Fundraisers">
        <ul className="space-y-3">
          {dummyLeaderboard.map((entry) => (
            <li
              key={entry.rank}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
            >
              <div className="flex items-center">
                <span className="text-lg font-semibold text-blue-300 mr-3">{entry.rank}.</span>
                <span className="text-white">{entry.name}</span>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">${entry.donations}</p>
                <p className="text-sm text-gray-300">{entry.referrals} referrals</p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default LeaderboardPage;
