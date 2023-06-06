function reverseNumber(n, b) {
  if (b == 1) {
    return n;
  }
  if (typeof n === 'bigint') {
    let str = n.toString(Number(b)).split('').reverse().join('');
    return BigInt(Number.parseInt(str, Number(b)));
  } else {
    let str = n.toString(b).split('').reverse().join('');
    return Number.parseInt(str, b);
  }
}

console.log(reverseNumber(45n, 30n));