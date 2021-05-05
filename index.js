const busPassengers = (busStops) => {
  let passengers = 0
  for (let i=0; i < busStops.length; i++) {
    passengers += busStops[i][0] - busStops[i][1]
  }
  return passengers
}

busPassengers([[10,0],[3,5],[5,8]]) //expected 5
busPassengers([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) //expected 21