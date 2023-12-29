function toCamelCase(str){
  return str.replace(/([-|_])([a-z]{1})/ig, function(match) {
    return match[1].toUpperCase();
  });
}
