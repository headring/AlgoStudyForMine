function solution(brown, yellow) {
  let total = brown + yellow;
  for (let i = 0; i <= Math.floor(Math.sqrt(total)); i++) {
    if (total % i !== 0) continue;
    let row = total / i;
    let column = i;
    if ((row - 2) * (column - 2) === yellow) return [row, column];
  }
}
