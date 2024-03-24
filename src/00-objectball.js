function gameObject() {
    
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          },
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
              },
              "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
              },
              "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
              },
              "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
              },
              "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
              },
        }
      }
    };
  }
 
  console.log(gameObject());
  gameObject();
  
//   BUILDING FUNCTIONS
function numPointsScored(playerName) {
    const gameData = gameObject();
    const team = playerName.toLowerCase().includes("hornets") ? "away" : "home"; 
    const playerStats = gameData[team].players[playerName];
    return playerStats ? playerStats.points : null; 
  }
//   function shoeSize
  function shoeSize(playerName) {
    const gameData = gameObject();
    const team = playerName.toLowerCase().includes("hornets") ? "away" : "home"; 
    const playerStats = gameData[team].players[playerName];
    return playerStats ? playerStats.shoe : null; 
  }
//   function teamColors
function teamColors(teamName) {
    const gameData = gameObject();
    const team = gameData[teamName.toLowerCase()]; 
    return team ? team.colors : null; 
  }
//   function teamNames
function teamNames() {
    const gameData = gameObject();
    return Object.keys(gameData); 
  }
//   function playerNumbers
function playerNumbers(teamName) {
    const gameData = gameObject();
    const team = gameData[teamName.toLowerCase()]; 
    if (!team) return null; 
  
    const playerNumbers = [];
    for (const playerName in team.players) { 
      playerNumbers.push(team.players[playerName].number); 
    }
    return playerNumbers;
  }
//   function playerStats
  function playerStats(playerName) {
    const gameData = gameObject();
    const team = playerName.toLowerCase().includes("hornets") ? "away" : "home"; 
    const playerStats = gameData[team].players[playerName];
    return playerStats || {}; 
  }
//   function bigShoeRebounds
function bigShoeRebounds() {
    const gameData = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    // Find player with largest shoe size
    for (const teamName in gameData) {
      for (const playerName in gameData[teamName].players) {
        const playerStats = gameData[teamName].players[playerName];
        if (playerStats.shoe > largestShoeSize) {
          largestShoeSize = playerStats.shoe;
          playerWithLargestShoe = playerName;
        }
      }
    }
  
  
    return playerWithLargestShoe ? gameData[playerWithLargestShoe.split(" ")[0].toLowerCase()].players[playerWithLargestShoe].rebounds : null;
  }
  
  
  