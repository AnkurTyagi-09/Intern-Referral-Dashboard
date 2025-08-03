import { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import { dummyRewards } from '../data/dummyData';

function Dashboard({ userData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userData);
  const [formData, setFormData] = useState({ name: userData.name, email: userData.email });

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setProfile({ ...profile, name: formData.name, email: formData.email });
    localStorage.setItem('userProfile', JSON.stringify(formData));
    setIsEditing(false);
    console.log('Profile updated:', formData);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 p-6 rounded-xl">
  <Card title="Your Profile">
    <div className="space-y-3 text-white">
      <p><strong className="text-blue-300">Name:</strong> {profile.name}</p>
      <p><strong className="text-blue-300">Email:</strong> {profile.email}</p>
      <p>
        <strong className="text-blue-300">Referral Code:</strong>{' '}
        <span className="text-purple-300 font-semibold">{profile.referralCode}</span>
      </p>
      <p><strong className="text-blue-300">Total Donations:</strong> ${profile.donations}</p>
      <div className="mt-4">
        <p className="text-sm font-semibold text-gray-300">Progress to $5000 Goal</p>
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full"
            style={{ width: `${(profile.donations / 5000) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-300 mt-1">
          {((profile.donations / 5000) * 100).toFixed(1)}% Complete
        </p>
      </div>
      <p><strong className="text-blue-300">Join Date:</strong> {profile.joinDate}</p>
      <p><strong className="text-blue-300">Referrals:</strong> {profile.referrals}</p>

          <Button
            onClick={() => {
              navigator.clipboard.writeText(`https://example.com/refer/${profile.referralCode}`);
              console.log('Referral link copied:', profile.referralCode);
              alert('Referral link copied!');
            }}
            text="Copy Referral Link"
          />
          <Button onClick={handleEdit} text="Edit Profile" />
        </div>
      </Card>

      {/* Rewards Card */}
      <Card title="Rewards & Unlockables">
        <ul className="space-y-4">
          {dummyRewards.map((reward) => (
            <li
              key={reward.id}
              className={`p-3 rounded-lg ${reward.unlocked ? 'bg-green-100' : 'bg-gray-100'}`}
            >
              <strong
                className={
                  reward.unlocked ? 'text-green-700 font-semibold' : 'text-gray-600 font-semibold'
                }
              >
                {reward.name}
              </strong>
              <p className="text-sm !text-black">{reward.description}</p>
            </li>
          ))}
        </ul>
      </Card>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit Profile</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <div className="flex justify-end gap-2">
              <Button onClick={() => setIsEditing(false)} text="Cancel" />
              <Button onClick={handleSave} text="Save" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
