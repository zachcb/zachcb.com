/*
 * Debounce
 * This function calls the callback function after the previous task
 * has been completed and the timeout has been reached.
 *
 * @param {function} callback - Expensive tasks to run by debounce
 * @param {number} timeout - Timeout in milliseconds
 * @param {boolean} isLeading - Whether to run before or after function has completed
 * @return {function} Context to run callback with
 *
 *
 * On each event trigger, the timeout resets. For example, each time resize
 * callback is ran, the timeout goes back to X. When resize stops firing and
 * resetting the timeout, then timeout runs to finish.
 */
function debounce(callback, timeout = 0, isLeading = false) {
  let timeoutInstance = null;

  return function context(...args) {
    const immediate = isLeading && !timeout;
    const later = () => {
      !isLeading && callback.apply(this, args);
    };

    clearTimeout(timeoutInstance);
    timeoutInstance = setTimeout(later, timeout);
    immediate && callback.apply(this, args);
  };
}

export default debounce;
