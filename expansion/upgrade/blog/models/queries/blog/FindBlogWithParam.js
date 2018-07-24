const Blog = require("../../blog");
/* Aristos Logger Path */
// const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger").addError;

/**
 * Finds a single blog in the Blog collection.
 * @param {object} stuff - The param to search for the record(s) to find.
 * @return {promise} A promise that resolves with the page that matches the id
 */
module.exports = stuff => {
  return Blog.find(stuff);
};