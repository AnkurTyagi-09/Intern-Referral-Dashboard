# Intern Referral Dashboard

A stylish, frontend-only React application built with Vite and Tailwind CSS, designed to manage intern referrals with a professional and engaging user interface. Features include a login system with static credential validation, an animated gradient dashboard, user profile customization, referral link sharing, donation progress tracking, a leaderboard, and dark mode support. All data is static and stored in the frontend, requiring no backend or API.

## Features

- **Login System**: Validates username (`admin`) and password (`password123`) against hardcoded credentials, with error feedback and `localStorage` persistence for session management.
- **Animated Dashboard Background**: Dynamic gradient background using CSS keyframes, cycling through deep blue (`#1E40AF`), lighter blue (`#3B82F6`), and green (`#10B981`) for a modern look.
- **User Profile**:
  - Displays name, email, referral code, donations, join date, and referral count.
  - Editable name and email, saved to `localStorage`.
- **Referral Link Sharing**: Copy a shareable referral link to the clipboard with a mock URL.
- **Donation Progress Bar**: Visualizes progress toward a $5000 goal with a gradient-filled bar.
- **Leaderboard**: Lists top 5 fundraisers with rank, name, donations, and referrals.
- **Rewards Section**: Shows unlocked and locked rewards with descriptions.
- **Dark Mode**: Toggle between light and dark themes for accessibility and style.
- **Responsive Design**: Adapts to mobile and desktop using Tailwind CSS responsive classes.
- **Logging**: Console-based logging for login attempts, profile updates, and referral link copies.

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

## Setup Instructions

1. **Clone the Repository** (or create a new project):
   ```bash
   npm create vite@latest intern-referral-app -- --template react
   cd intern-referral-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind**:
   Update `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: '#1E40AF', // Deep blue
           secondary: '#3B82F6', // Lighter blue
           accent: '#10B981', // Green for highlights
         },
       },
     },
     plugins: [],
   }
   ```

4. **Copy Project Files**:
   - Replace the contents of the `src/` folder with the provided files (see [Project Structure](#project-structure)).
   - Ensure `index.html`, `package.json`, `vite.config.js`, `tailwind.config.js`, and `postcss.config.js` are in the root.

5. **Run the Application**:
   ```bash
   npm run dev
   ```
   - Open `http://localhost:5173` in your browser.

## Usage

1. **Login**:
   - Use credentials: `username: admin`, `password: password123`.
   - Invalid inputs display an error message.
   - Successful login saves a mock token to `localStorage` and redirects to the dashboard.
   - Logout clears `localStorage` and returns to the login page.

2. **Dashboard**:
   - View user profile (name, email, referral code, donations, join date, referrals).
   - Edit profile details (name, email) via a modal, saved to `localStorage`.
   - Copy a referral link (`https://example.com/refer/<code>`) to the clipboard.
   - Track donation progress toward a $5000 goal with a progress bar.
   - View rewards (unlocked in green, locked in gray).

3. **Leaderboard**:
   - Displays top 5 fundraisers with rank, name, donations, and referrals.
   - Hover effects highlight entries.

4. **Dark Mode**:
   - Toggle via the navbar icon to switch between light and dark themes.

5. **Logging**:
   - Check the browser console (F12) for logs of login attempts, profile updates, and referral link copies.

## Project Structure

```
intern-referral-app/
├── public/
│   ├── vite.svg
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   └── Card.jsx
│   │   ├── LoginForm.jsx
│   │   └── Dashboard.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── LeaderboardPage.jsx
│   ├── data/
│   │   └── dummyData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

### Key Files
- **`src/data/dummyData.js`**: Static data for user profile, rewards, leaderboard, and login credentials.
- **`src/styles/index.css`**: Tailwind CSS setup with animated gradient background.
- **`src/App.jsx`**: Manages app state, login persistence, and navigation.
- **`src/components/LoginForm.jsx`**: Handles login validation with error feedback.
- **`src/components/Dashboard.jsx`**: Displays profile, progress bar, referral link, and rewards.
- **`src/pages/LeaderboardPage.jsx`**: Shows top fundraisers.

## Styling Details
- **Colors**: Custom palette (`primary: #1E40AF`, `secondary: #3B82F6`, `accent: #10B981`) for a cohesive look.
- **Background**: Animated gradient cycles through colors every 10 seconds for a dynamic effect.
- **Responsive Design**: Uses Tailwind’s `sm:`, `md:`, `lg:` prefixes for mobile and desktop compatibility.
- **Dark Mode**: Toggles via navbar, adjusting backgrounds, text, and card colors.
- **Animations**: Hover effects on cards and buttons, with a subtle scale transform on the login form.

## Testing
- **Login**:
  - Valid: `username: admin`, `password: password123` → Redirects to dashboard.
  - Invalid: Try `wrong`/`wrong` → Shows "Invalid username or password".
  - Check console for logs (e.g., `Successful login for admin`).
- **Dashboard**:
  - Verify animated background, progress bar, and referral link copy.
  - Edit profile and confirm changes persist after refresh.
- **Leaderboard**: Ensure all entries display with hover effects.
- **Dark Mode**: Toggle and check color changes.

## Notes
- **No Backend**: All functionality is frontend-only, using static data in `dummyData.js`.
- **Credentials**: Hardcoded for simplicity (`admin`/`password123`). In production, use a secure backend with authentication.
- **Logging**: Console-based due to no backend; view in browser developer tools (F12).
- **Customization**: Adjust gradient animation speed in `index.css` (`animation: gradient 10s ease infinite`).

## Future Enhancements
- **Password Visibility Toggle**: Add an eye icon to show/hide the password.
- **Notifications**: Display mock notifications for recent activities.
- **CSV Export**: Download leaderboard as a CSV file.
- **Custom Backgrounds**: Allow users to select different gradient styles.

## License
MIT License. Feel free to use and modify as needed.
