export default function perfectSubstring(s, k) {
  if (s.length < k || !s.length) return 0;

  let count = 0;

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i; j < s.length; j++) {
      const ss = s.substring(i, j + 1);
      if (ss.length >= k && isPerfect(ss, k)) count++;
    }
  }

  return count;
}

function isPerfect(str, k) {
  const freq = str.split('').reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {})
  return Object.keys(freq).every((key) => freq[key] === k);
}
