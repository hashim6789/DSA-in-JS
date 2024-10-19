function powerOf(x, y) {
  if (y <= 1) {
    return x;
  }
  return powerOf(x, y - 1) * x;
}

console.log(powerOf(3, 3));