function addBigNum(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry) {
    const n1 = i >= 0 ? +a[i--] : 0;
    const n2 = j >= 0 ? +b[j--] : 0;
    const sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  return result;
}

// 测试
console.log(
  addBigNum("123456789012345678901234567890", "987654321098765432109876543210"),
);
// 1111111110111111111011111111100
