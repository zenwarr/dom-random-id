/**
 * Generates a random id
 * @returns {string} Generated id
 */
export function generateRandomId(): string {
  // if something does not work, blame him: https://stackoverflow.com/a/6860916/1906729
  let S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return 'rid-' + (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

/**
 * Returns id or assigns a new one and returns it.
 * @param {HTMLElement} elem Element
 * @returns {string} Id
 */
export function getElementId(elem: HTMLElement): string {
  let id = elem.getAttribute('id');
  if (id == null) {
    id = generateRandomId();
    elem.setAttribute('id', id);
  }
  return id;
}
