function getDuplicatedElement( arrayArg ) {
  if (typeof arrayArg == 'string') {
    arrayArg = arrayArg.split('');
  }
  const uniqueElements = new Set();
  let duplicatedElement;

  for (const element of arrayArg) {
    if (uniqueElements.has(element)) {
      duplicatedElement = element;
      break;
    }
    uniqueElements.add(element);
  }

  return duplicatedElement;
}

function duplicateSandwich(a) {
  const duplicated = getDuplicatedElement(a);
  const start = a.indexOf(duplicated) + 1;
  const end = a.lastIndexOf(duplicated);

  if (duplicated !== undefined) {
    return a.slice(start, end);
  }

  return [];
}
