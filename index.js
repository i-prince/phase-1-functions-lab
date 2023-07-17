function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const blocks = Math.abs(endBlock - startBlock);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance >= 2500) {
    return 'cannot travel that far';
  }
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));
console.log(distanceTravelledInFeet(50,34));
console.log(calculatesFarePrice(50,44));
