/**
 * http://jaketrent.com/post/addremove-classes-raw-javascript/
 */

/**
 * hasClass
 * @param el
 * @param className
 * @returns {boolean}
 */
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

/**
 * addClass
 * @param el
 * @param className
 */
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

/**
 * removeClass
 * @param el
 * @param className
 */
function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}
