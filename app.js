export default function perfectSubstring(s, k) {
  if (s.length < k || !s.length) return 0;

  let count = 0;

  for (let start = 0; start < s.length - 1; start++) {
    for (let end = start; end < s.length; end++) {
      const ss = s.substring(start, end + 1);
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
