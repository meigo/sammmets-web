/**
 * @param {string} string
 * @returns {string}
 */
export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * @param {number} number
 * @returns {boolean}
 */
export function isOdd(number) {
  return number % 2 !== 0;
}

/**
 * @param {string} path
 * @returns {string}
 */
export function getFileFromPath(path) {
  return path.substring(path.lastIndexOf("/") + 1);
}

/**
 * @param {string} str
 */
export function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
}

/**
 * @param {slug} slug
 */
export function deslugify(slug) {
  var words = slug.split("-");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  return words.join(" ");
}
