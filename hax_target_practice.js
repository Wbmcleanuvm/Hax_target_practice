const http = require('http'); 
const HaxballJS = require('haxball.js');

HaxballJS().then((HBInit) => {

const stadium = '{ "name": "Tumbles AimTrain", "width": 400, "height": 250, "cameraWidth": 0, "cameraHeight": 0, "maxViewWidth": 0, "cameraFollow": "ball", "spawnDistance": 200, "redSpawnPoints": [], "blueSpawnPoints": [], "canBeStored": true, "kickOffReset": "partial", "bg": { "color": "1D2431", "type": "none", "cornerRadius": 0, "kickOffRadius": 0 }, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "vertexes": [ { "x": -347, "y": 131, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": 349, "y": 131, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -174, "y": 168, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -176, "y": 147, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -196, "y": 146, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -164, "y": 144, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -151, "y": 144, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -122, "y": 145, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -109, "y": 167, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -80, "y": 167, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -52, "y": 165, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -31, "y": 154, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -31, "y": 168, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -36, "y": 147, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -7, "y": 145, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": -1, "y": 168, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": 10, "y": 162, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": 45, "y": 158, "cMask": [ "all" ], "cGroup": [ "c0" ], "curve": 0 }, { "x": 35, "y": 171, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "x": 26, "y": 157, "cMask": [ "all" ], "cGroup": [ "c0" ], "curve": 0 }, { "x": -347, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": 349, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -121.00049793426291, "y": -137.0004979342629, "cMask": [ "red" ], "cGroup": [ "red" ], "color": "9598A3", "curve": 0 }, { "x": -120, "y": 129, "cMask": [ "red" ], "cGroup": [ "red" ], "color": "9598A3", "curve": 0 }, { "x": 349, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -347, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": 347, "y": 131, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": 347, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -347, "y": 129, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": 349, "y": 129, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -345, "y": 131, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -345, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "x": -165.1277818591839, "y": -9.335846324194142, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "9598A3" }, { "x": -165.1277818591839, "y": 9.33584632419414, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "9598A3" }, { "x": 354.5, "y": 131, "cMask": [ "all" ], "cGroup": [ "all" ], "color": "1D2431" }, { "x": 354.5, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ], "color": "1D2431" }, { "x": -347, "y": 136.5, "cMask": [ "all" ], "cGroup": [ "all" ], "color": "1D2431" }, { "x": 349, "y": 136.5, "cMask": [ "all" ], "cGroup": [ "all" ], "color": "1D2431" }, { "x": -350.5, "y": 131, "cMask": [ "all" ], "cGroup": [ "all" ], "color": "1D2431" }, { "x": -350.5, "y": -135, "cMask": [ "all" ], "cGroup": [ "all" ], "color": "1D2431" }, { "x": -271, "y": -19, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "538C37" }, { "x": -259, "y": -31, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "538C37" }, { "x": -270, "y": -21, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "538C37" }, { "x": -259, "y": -31, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "538C37" }, { "x": -245, "y": -21, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "538C37" }, { "x": -258, "y": 7, "cMask": [ "c0" ], "cGroup": [ "c0" ], "color": "538C37" }, { "x": -171, "y": 51, "cMask": [ "c0" ], "cGroup": [ "c0" ] } ], "segments": [ { "v0": 0, "v1": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "v0": 2, "v1": 3, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 4, "v1": 5, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 6, "v1": 7, "curve": -237.67100169548618, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 8, "v1": 9, "curve": 198.6606959150396, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 9, "v1": 10, "curve": 200.12137959064583, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 11, "v1": 12, "curve": 250.08385880307807, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 13, "v1": 12, "curve": 0, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 14, "v1": 15, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 15, "v1": 16, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 17, "v1": 18, "curve": -261.16025772229057, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 17, "v1": 19, "curve": 0, "cMask": [ "all" ], "cGroup": [ "c0" ] }, { "v0": 20, "v1": 21, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "v0": 21, "v1": 1, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "v0": 22, "v1": 23, "curve": 0, "color": "9598A3", "cMask": [ "red" ], "cGroup": [ "red" ], "x": -120 }, { "v0": 30, "v1": 31, "cMask": [ "all" ], "cGroup": [ "all" ], "x": -345 }, { "v0": 32, "v1": 33, "curve": 236.2807119392343, "color": "9598A3", "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 40, "v1": 41, "curve": 321.80821829510603, "color": "538C37", "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 43, "v1": 44, "curve": 322.21885667963187, "color": "538C37", "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 42, "v1": 45, "curve": -278.0784769353757, "color": "538C37", "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 45, "v1": 44, "curve": -273.36113530062744, "color": "538C37", "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 45, "v1": 46, "curve": -92.86612813465219, "color": "538C37", "cMask": [ "c0" ], "cGroup": [ "c0" ] } ], "goals": [], "discs": [ { "invMass": 0, "pos": [ 20, 32 ], "cMask": [ "all" ], "cGroup": [ "c0" ] } ], "planes": [ { "normal": [ 0, -1 ], "dist": -131.76000000000002, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ 0, 1 ], "dist": -135.98118630822498, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ 1, 0 ], "dist": -348.84000000000003, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ -1, 0 ], "dist": -351.00000000000006, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ 0, -1 ], "dist": -131.76000000000002, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ 0, 1 ], "dist": -135.98118630822498, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ 1, 0 ], "dist": -348.84000000000003, "cMask": [ "all" ], "cGroup": [ "all" ] }, { "normal": [ -1, 0 ], "dist": -351.00000000000006, "cMask": [ "all" ], "cGroup": [ "all" ] } ], "joints": [], "playerPhysics": { "radius": 15, "bCoef": 0.5, "invMass": 0.5, "damping": 0.96, "cGroup": [ "all" ], "acceleration": 0.1, "gravity": [ 0, 0 ], "kickingAcceleration": 0.07, "kickingDamping": 0.96, "kickStrength": 5, "kickback": 0 }, "ballPhysics": { "radius": 5.8, "bCoef": 0.412, "cMask": [ "all" ], "invMass": 1.55, "gravity": [ 0, 0 ], "color": "FFA500", "cGroup": [ "ball" ], "pos": [ -120, 0 ], "damping": 0.99 } }';
const roomName = "🍀tumbles AimTrain🍀";
const botName = "tumbot";
const maxPlayers = 6;
const roomPublic = true;
const loc = { "code": "us", "lat": 40.74, "lon": -73.98 };
let token = "thr1.AAAAAGk-P0E4x22nNJ3iSQ.pTqkjbeMsyE";

const room = HBInit({roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, token: token, geo: loc});

room.setCustomStadium(stadium);
let gameActive = false;
let score = 0;
let streak = 0;
let ticks = 0;
let topstreak = 0;
var cf = room.CollisionFlags;
var players;
var teamS;
var teamR;
var highScore = [[39,"motion"],[0,0],[0,0]];
var highStreak = [[22,"motion"],[0,0],[0,0]];
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var gameTimerResolve = null;
var afkResolve = null;

// active functions 
room.onGameTick = function (){
    if(gameActive) notAfk();
    if(ballMoved() && gameActive == false){
        startGame();
        ticks = 0;
    }else if (gameActive && ballMoved()){
        if(ticks < 180){
            if (checkMiss()){
                resetBall();
                addTargetObject();
                resetPlayer();
                streak = 0;
                ticks = 0;
            }
            if(checkOnTarget()){
                resetBall();
                addTargetObject();
                resetPlayer();
            if(ticks > 1){
                score += 1;
                streak += 1;
                if (streak > topstreak) topstreak = streak;
                if(score % 5 == 0){
                    room.sendChat("Current score: " + score + ", Streak: " + streak);
                }else{
                    room.sendChat("Current score: " + score + ", Streak: " + streak, teamR[0].id);
                }
                
            }
                ticks = 0;
            }
        ticks += 1;
        }else{
            resetBall();
            addTargetObject();
            resetPlayer();
            ticks = 0;
            streak = 0;
        }
    }
}

room.onGameStart = function (byplayer){
    resetBall();
    addTargetObject();
    updatePlayers();
    AfkTimer();
}

room.onGameStop = function(byplayer){
    setTimeout(() => {
        updatePlayers();
        if(!onRed()){
            if (teamS.length > 1){
                room.setPlayerTeam(teamS[1].id, Team.RED);
                endGameEarly();
                setTimeout(() => {
                room.startGame();
                }, 1000);
            }
        }
    }, 1000);
}

room.onPlayerLeave = function (player){
    try{
    if(player.id == teamR[0].id){
        notAfk();
    }}
    catch{
        TypeError
    }
    updatePlayers();
    if(!onRed()){
        endGameEarly();
        room.stopGame();
        gameActive = false;
    }
}

room.onPlayerJoin = function (player){
    updatePlayers();
    room.sendChat("yo- !help")
    if(!onRed()){
        room.setPlayerTeam(teamS[1].id, Team.RED)
        room.startGame();
    }
}

room.onPlayerChat = function (player, message) {
    message = message.split(/ +/);
    if (message[0].toLowerCase() == "!claim"){
        if (message[1].toLowerCase() == "cd"){
            room.setPlayerAdmin(player.id, true);
        }
        return false;
    }else if (message[0].toLowerCase() == "!bb"){
        room.kickPlayer(player.id, "bye!")
    }else if(message[0].toLowerCase() == "!help"){
        room.sendChat("!Reportbugs, !bb, !highscore, !topstreak", player.id);
        return false;
    }else if(message[0].toLowerCase() == "!reportbugs"){
        room.sendChat("Please dm me on discord @cheesecake108", player.id);
        return false;
    }else if(message[0].toLowerCase() == "!highscore"){
        room.sendChat((highScore[0][1] + ": Score: " + highScore[0][0] +", " + highScore[1][1] + ": Score: " + highScore[1][0] + ", " + highScore[2][1] + ": Score: " + highScore[2][0]), player.id);
        return false;
    }else if(message[0].toLowerCase() == "!topstreak"){
        room.sendChat((highStreak[0][1] + ": Streak: " + highStreak[0][0] + ", " + highStreak[1][1] + ": Streak: " + highStreak[1][0] + ", " + highStreak[2][1] + ": Streak: " + highStreak[2][0]), player.id);
        return false;
    }
}

// AFKTIMER
async function AfkTimer(){
    await new Promise(resolve => {
        afkResolve = resolve; // Store it
        setTimeout(resolve, 15000);
    });
    if(!ballMoved()){
        try{
            room.kickPlayer(teamR[0].id, "Kicked for afk");
        }catch{
            TypeError;
        }  
    }
    
    afkResolve = null;
}
function notAfk(){
    if (afkResolve){
        afkResolve();
    }
}

//resolves game timer 
function endGameEarly() {
    if (gameTimerResolve) {
        gameTimerResolve();
        room.sendChat("he LEAVES");
    }
}
//helper functions
function onRed(){
    if (teamR.length === 0) return false;
    return true;
}
function updatePlayers(){
    players = room.getPlayerList();
    teamS = players.filter(p => p.team === Team.SPECTATORS);
    teamR = players.filter(p => p.team === Team.RED);
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBall(){
    room.setDiscProperties(0, {
    x: -160,     // Position X
    y: 0,          // Position Y
    xspeed: 0,
    yspeed: 0
  });

}
//if true game starts
function ballMoved(){
    let ballPos = room.getBallPosition();
    if(ballPos != null){
        if (ballPos.x > -120 ) return true; 
    }
 
}

async function startGame() {
    gameActive = true;
    updatePlayers();
    let player = teamR[0].name;
    room.sendChat("Game starting!");
    
       await new Promise(resolve => {
        gameTimerResolve = () => {
            // Clear all scheduled timeouts when resolving early
            timers.forEach(clearTimeout);
            resolve();
        };
        
        const totalTime = 60000;
        
        // Store timeout IDs so we can cancel them
        const timers = [
            setTimeout(() => room.sendChat("30 seconds remaining!"), 30000),
            setTimeout(() => room.sendChat("10 seconds remaining!"), 50000),
            setTimeout(() => room.sendChat("5 seconds remaining!"), 55000),
            setTimeout(() => {
                timers.forEach(clearTimeout); // Clean up
                resolve();
            }, totalTime)
        ];
    });
    
    gameActive = false;
    for(let i = 0; i < 3; i++){
        if(score > highScore[i][0]){
            if (i < 2){
                highScore[i + 1][0] = highScore[i][0]
                highScore[i + 1][1] = highScore[i][1]
            }
            highScore[i][0] = score;
            highScore[i][1] = player
            room.sendChat("New high score!");
            i = 10;
        }
    }
    for(let i = 0; i < 3; i++){
        if(topstreak > highStreak[i][0]){
            if (i < 2){
                highStreak[i + 1][0] = highStreak[i][0]
                highStreak[i + 1][1] = highStreak[i][1]
            }
            highStreak[i][0] = topstreak;
            highStreak[i][1] = player;
            room.sendChat("New top streak!");
            i = 10;
        }
    }
    room.sendChat("Game over! Score: "  + score + ", Top streak: " + topstreak);
    redToSpecBtn();
    score = 0;
    streak = 0;
    topstreak = 0;
    room.stopGame();
    gameTimerResolve = null;
    
}

function checkOnTarget(){
    let ballPos = room.getBallPosition();
    let targetPos = room.getDiscProperties(1);
    let dx = ballPos.x - targetPos.x;
    let dy = ballPos.y - targetPos.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    
    let targetRadius = targetPos.radius;
    
    // Check if they're overlapping
    return distance <= (targetRadius + 5.5);
}

function resetPlayer(){
    room.setDiscProperties(2,{
        x: -200,
        y: 0,
        xspeed: 0,
        yspeed: 0
    });
}

function checkMiss(){
    let ballPos = room.getBallPosition();
    let targetPos = room.getDiscProperties(1);

    let targetRadius = targetPos.radius + 5.5;

    return ballPos.x > targetPos.x + targetRadius;
}


function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * max);
}

function addTargetObject(){
    //targetObject is at idx 1 !!!
    //ball at 0 !!
    //rand pos 0-100
    var xPos = getRandomInt(425) -110;
    var yPos = getRandomInt(240) -125;

    room.setDiscProperties(1, {
    x: xPos,     // Position X
    y: yPos,          // Position Y
    radius: 10,    // Size
    color: 0xFF0000, // Red color
    invMass: 0,    // Infinite mass (static)
    bCoef: 1,   // Bounciness
  });
}

const PORT = process.env.PORT || 3000;
  
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Haxball server is running!\n');
  }).listen(PORT, () => {
    console.log(`HTTP server listening on port ${PORT}`);
});



});