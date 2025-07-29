function solution(n) {
  let num = n;
  let numOne = n.toString(2).length - n.toString(2).replaceAll("1", "").length;
  for (;;) {
    num++;
    let upperOne =
      num.toString(2).length - num.toString(2).replaceAll("1", "").length;
    if (numOne === upperOne) return num;
  }
}
