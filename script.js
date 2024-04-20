
function pistolero(string){
    let x1 = Math.floor(Math.random() * 20) + 1;
    let x2 = Math.floor(Math.random() * 20) + 1;

    let reactP1 = ' '.repeat(x1) + string
    let reactP2 = ' '.repeat(x2) + string
    return [reactP1,reactP2]
}


let players = pistolero('Bang!')
console.log(players)



function showdown(duel) {
    const player1 = duel[0].indexOf("B")
    const player2 = duel[1].indexOf("B")
      return player1 < player2 ? 'p1 is a winner': player2 < player1?'p2 is a winner':'tie'
  }
  console.log(showdown(players))