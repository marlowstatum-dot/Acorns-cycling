# 🌰 Acorns Cycling

**AAA Multiplayer Bicycle Racing Game - Live Service**

A colorful, competitive, and beginner-friendly multiplayer racing game inspired by Fortnite, Mario Kart, Rocket League, and Brawl Stars.

## 🎮 Game Overview

- **Release Date:** November 1st, 2022
- **Developer:** Acorn (Solo Developer)
- **Publisher:** Zipples
- **Genre:** Multiplayer Racing, Competitive, Live Service
- **Current Year in Lore:** 2026
- **Active Players:** Millions of Monthly Active Users
- **Current Update:** Wild Update

## 🚀 Features

### Core Gameplay
- **Collect & Customize:** 20+ unique bikes with different classes and rarities
- **Competitive Racing:** Solo, Duo, Trio, and Ranked game modes
- **Live Service:** Seasonal updates, battle pass system, limited-time events
- **Economy System:** Player-driven market for buying/selling bikes and cosmetics

### Player Progression
- **Bike Upgrades:** Level up bike components (Tires, Handlebars, Brakes, Pedals, Seat)
- **Collections:** Rims, Helmets, Victory Effects, Trails, and more
- **Clans:** Create or join clans for clan wars and team competitions
- **Achievements:** Unlock titles and badges as you progress

### Visual Design
- **Warm, Playful Aesthetic:** Inspired by Acorn the rabbit mascot
- **Color Palette:** Tan, Copper Brown, Walnut Brown, Cream White, Accent Green
- **Bright & Cartoonish:** Highly readable, friendly UI

## 📁 Project Structure

```
acorns-cycling/
├── server.js              # Backend API server
├── package.json           # Node.js dependencies
├── client/                # React frontend
│   ├── public/
│   │   └── index.html     # HTML entry point
│   └── src/
│       ├── App.js         # Main app component
│       ├── index.js       # React entry point
│       ├── index.css      # Global styles
│       └── components/    # React components
│           ├── Lobby.js       # Main lobby view
│           ├── TopNavigation.js
│           ├── BikeDisplay.js
│           ├── PlayerInfo.js
│           └── ActionButtons.js
└── README.md
```

## ⚙️ Tech Stack

- **Frontend:** React 18, CSS3 (custom animations & effects)
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (setup coming soon)
- **Game Client:** Babylon.js or Three.js (for 3D bike rendering)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/marlowstatum-dot/acorns-cycling.git
cd acorns-cycling
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Install Frontend Dependencies
```bash
cd client
npm install
cd ..
```

### 4. Start the Backend Server
```bash
npm start
```
Server runs on `http://localhost:5000`

### 5. Start the Frontend (in a new terminal)
```bash
npm run client
```
Frontend runs on `http://localhost:3000`

### 6. Open in Browser
Navigate to `http://localhost:3000` to view the app

## 📡 API Endpoints

### Player Endpoints
- `GET /api/player/:playerId` — Get player data
- `POST /api/player/:playerId/equip-bike` — Equip a bike

### Bike Endpoints
- `GET /api/bikes/:playerId` — Get player's bike collection
- `GET /api/bike/:bikeId` — Get single bike details

### Season Endpoints
- `GET /api/season` — Get current season info

### Health Check
- `GET /api/health` — Server status

## 🎯 Current Features

### Implemented
✅ Lobby System with player profile  
✅ Bike collection display & rotation  
✅ Top navigation menu (PLAY, GARAGE, MARKET, PROFILE, SETTINGS)  
✅ Player stats & achievements showcase  
✅ Ready button & game mode selection  
✅ Seasonal background system  
✅ Currency display (Coins, Gears, Cash)  

### Coming Soon
🔄 Matchmaking system  
🔄 Racing game client  
🔄 Database integration (PostgreSQL)  
🔄 User authentication  
🔄 Garage customization UI  
🔄 Market trading system  
🔄 Clan system  
🔄 Esports leaderboards  

## 🎨 Color Palette

```
Primary Tan:      #D7B185
Copper Brown:     #A66A3F
Walnut Brown:     #6B4326
Cream White:      #F6E8D5
Accent Green:     #4E8B58
Dark Background:  #1a1a1a
```

## 🤝 Contributing

This is a development project. All contributions will be reviewed before merging.

## 📝 License

MIT License — feel free to use this code in your projects!

## 🐿️ Mascot

**Acorn** — The face of Acorns Cycling! A friendly rabbit mascot that appears in tutorials, loading screens, events, and promotional art.

---

**Built with ❤️ by Acorn**  
*"Race with Friends, Collect Bikes, Compete & Thrive"*
