const bcrypt = require('bcrypt');
const saltRounds = 8;


/**
 * It takes a string, hashes it, and returns the hash.
 * @param dato - The data to be hashed.
 * @returns A promise.
 */
const hasingData = (dato) =>{
    const hash = bcrypt.hash(dato, saltRounds);
    console.log(hash);
    return hash;
};

/**
 * "compareHash" takes in a string and a hash, and returns a promise that resolves to true if the
 * string matches the hash, and false if it doesn't.
 * @param noHash - The password that you want to compare to the hash.
 * @param hashData - The hashed password
 * @returns A promise.
 */
const compareHash = (noHash, hashData) =>{
    return bcrypt.compare(noHash, hashData);
};

module.exports = { hasingData, compareHash};