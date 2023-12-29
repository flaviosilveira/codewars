function toCamelCase(str){
  return str.replace(/([-_])(.)/g, (_, g1, g2) => g2.toUpperCase());
}
