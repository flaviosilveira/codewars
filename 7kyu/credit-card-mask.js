function maskify(cc) {
  let masked = cc.slice(-4);
  if ((cc.length - 4) >= 1) {
    masked = '#'.repeat(cc.length - 4) + masked;
  }
  return masked;
}
