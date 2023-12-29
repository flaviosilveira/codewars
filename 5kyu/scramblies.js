function scramble(str1, str2) {
  const charCount = {};

  // Count characters in str1
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if str2 can be formed using the characters in str1
  for (const char of str2) {
    if (charCount[char] > 0) {
      charCount[char]--;
    } else {
      return false; // If a required character is not available, return false immediately
    }
  }

  return true;
}
