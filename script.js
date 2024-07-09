

const alphabet = "abcdefghijklmnopqrstuvwxyz"; // alphabet letters

function encryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase()); // find index of letter and make it lowercase
  const newIndex = (index + shift) % alphabet.length; // ensure index wraps around characters
  return alphabet[newIndex]; // return the new index of the letter in the alphabet
}

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let count = 0; // to keep track of every two characters
  for (let i = 0; i < message.length; i++) {
    if (alphabet.includes(message[i].toLowerCase())) {
      encryptedMessage += encryptLetter(message[i], shiftValue);
      count++;
      if (count === 2) {
        const randomIndex = Math.floor(Math.random() * 26);
        encryptedMessage += alphabet[randomIndex]; // add a random letter after every two characters
        count = 0; // reset the count
      }
    } else {
      encryptedMessage += message[i]; // preserve non-alphabet characters
    }
  }
  return encryptedMessage; // return the encrypted message with the shift values
}

function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());
  let newIndex = (index - shift + alphabet.length) % alphabet.length; // ensure the index wraps around the alphabet
  if (newIndex < 0) {
    newIndex += alphabet.length; // if the index is negative, add the length of the alphabet to it
  }
  return alphabet[newIndex];
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  let count = 0; // to keep track of every two characters
  for (let i = 0; i < encryptedMessage.length; i++) {
    if (alphabet.includes(encryptedMessage[i].toLowerCase())) {
      decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
      count++;
      if (count === 2 && i + 1 < encryptedMessage.length && alphabet.includes(encryptedMessage[i + 1].toLowerCase())) {
        i++; // skip the next character as it is a random letter
        count = 0; // reset the count
      }
    } else {
      decryptedMessage += encryptedMessage[i]; // preserve non-alphabet characters
    }
  }
  return decryptedMessage; // return the decrypted message with the shift values
}

