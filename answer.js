function disemvowel(str) {
  return str.match(/[^aeiou]/gi).join("")
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

