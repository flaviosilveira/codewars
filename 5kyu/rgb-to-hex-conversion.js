function rgb(r, g, b) {
  return hex(r)+hex(g)+hex(b);
}

function hex(n) {
  n = Math.max(0, Math.min(255, n));
  return ("0" + (Number(n).toString(16))).slice(-2).toUpperCase();
}
