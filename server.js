const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static React build files FIRST
app.use(express.static(path.join(__dirname, 'client/build')));

// ============================================
// MOCK DATABASE (In-Memory for now)
// ============================================
const mockPlayers = {
  'player_001': {
    id: 'player_001',
    username: 'AcornRacer',
    level: 45,
    coins: 125000,
    gears: 3500,
    cash: 2500,
    equippedBike: 'void',
    equippedHelmet: 'champion_helmet',
    equippedRim: 'nitro_rim',
    bikes: ['bike_v1', 'void', 'xm8', 'abyss'],
    wins: 247,
    totalRaces: 1200,
    rank: 'Expert',
    clan: 'Acorn Squad',
    banner: 'default_banner',
    titles: ['Speed Demon', 'Collector'],
    profileLikes: 342,
    joinDate: '2024-01-15'
  }
};

const mockBikes = {
  bike_v1: {
    id: 'bike_v1',
    name: 'Bike V1',
    class: 'Starter',
    rarity: 'Starter',
    speed: 30,
    control: 30,
    cost: 0,
    color: '#D7B185'
  },
  void: {
    id: 'void',
    name: 'Void',
    class: 'Hybrid',
    rarity: 'Exotic',
    speed: 46,
    control: 46,
    cost: 500000,
    color: '#1a1a2e'
  },
  xm8: {
    id: 'xm8',
    name: 'XM8',
    class: 'Speedster',
    rarity: 'Exotic',
    speed: 50,
    control: 35,
    cost: 750000,
    color: '#FF6B35'
  },
  abyss: {
    id: 'abyss',
    name: 'Abyss',
    class: 'Controller',
    rarity: 'Exotic',
    speed: 37,
    control: 50,
    cost: 600000,
    color: '#0a0a0a'
  }
};

const mockSeasons = {
  current: {
    name: 'Wild Update',
    number: 8,
    backgroundTheme: 'jungle',
    backgroundImage: '/assets/seasons/wild-jungle.jpg',
    startDate: '2026-06-01',
    endDate: '2026-08-10'
  }
};

// ============================================
// API ROUTES
// ============================================

// Get player data
app.get('/api/player/:playerId', (req, res) => {
  const { playerId } = req.params;
  const player = mockPlayers[playerId];

  if (!player) {
    return res.status(404).json({ error: 'Player not found' });
  }

  res.json(player);
});

// Get bike collection
app.get('/api/bikes/:playerId', (req, res) => {
  const { playerId } = req.params;
  const player = mockPlayers[playerId];

  if (!player) {
    return res.status(404).json({ error: 'Player not found' });
  }

  const playerBikes = player.bikes.map(bikeId => mockBikes[bikeId]);
  res.json(playerBikes);
});

// Get single bike details
app.get('/api/bike/:bikeId', (req, res) => {
  const { bikeId } = req.params;
  const bike = mockBikes[bikeId];

  if (!bike) {
    return res.status(404).json({ error: 'Bike not found' });
  }

  res.json(bike);
});

// Get current season
app.get('/api/season', (req, res) => {
  res.json(mockSeasons.current);
});

// Update equipped bike
app.post('/api/player/:playerId/equip-bike', (req, res) => {
  const { playerId } = req.params;
  const { bikeId } = req.body;
  const player = mockPlayers[playerId];

  if (!player) {
    return res.status(404).json({ error: 'Player not found' });
  }

  if (!player.bikes.includes(bikeId)) {
    return res.status(400).json({ error: 'Player does not own this bike' });
  }

  player.equippedBike = bikeId;
  res.json({ success: true, equippedBike: bikeId });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// ============================================
// CATCH ALL - SERVE REACT APP
// ============================================
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
  console.log(`🎮 Acorns Cycling Server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;
