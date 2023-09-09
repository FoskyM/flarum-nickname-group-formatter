// Thanks guys on StackOverflow
// https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript

export const escape = unsafe => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
