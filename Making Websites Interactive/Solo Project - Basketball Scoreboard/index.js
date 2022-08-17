let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
let winningTeam = document.getElementById('winning-team')


function homeScored(score) {
    homeScore += score
    homeScoreEl.textContent = homeScore
    setWinningTeam()
}

function guestScored(score) {
    guestScore += score
    guestScoreEl.textContent = guestScore
    setWinningTeam()
}

function newgame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    winningTeam.textContent = ""
}

function setWinningTeam() {
    if (homeScore > guestScore) {
        winningTeam.textContent = 'Home'
    } else if (homeScore === guestScore ) {
        winningTeam.textContent = "Draw"
    } else {
        winningTeam.textContent = 'Guest'
    }
}
