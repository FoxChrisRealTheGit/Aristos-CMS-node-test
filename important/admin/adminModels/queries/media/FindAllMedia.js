const Media = require("../../medias");
/* Aristos Logger Path */
const addErrorEvent = require("../../../../AristosStuff/AristosLogger/AristosLogger").addError;

/**
 * Finds all media in the Media collection.
 * @return {promise} A promise that resolves with all the media
 */
module.exports = () => {
  return Media.find({}).catch(err =>  addErrorEvent(err, "media query error"));
};