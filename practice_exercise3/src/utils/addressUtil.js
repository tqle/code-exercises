/**
 * Address Utility
 * Validate, format any address related properties
 */

/**
 * Check and return state default if state is undefined or null.
 * @param {string=} state
 */
export const validateState = state => {
  let validState;
  if (state) {
    validState = state;
  } else {
    // Default to some state or flag an error string to indicate
    // missing state.
    validState = "FL";
  }
  return validState;
};

/**
 * Check and return street default if street is undefined or null.
 * @param {string=} street
 */
export const validateStreet = street => {
  let validStreet;
  if (street) {
    validStreet = street;
  } else {
    validStreet = "";
  }
  return validStreet;
};

/**
 * Check and return suite default if suite is undefined or null.
 * @param {string=} suite
 */
export const validateSuite = suite => {
  let validSuite;
  if (suite) {
    validSuite = suite;
  } else {
    validSuite = "";
  }
  return validSuite;
};

/**
 * Check and return city default if city is undefined or null.
 * @param {string=} city
 */
export const validateCity = city => {
  let validCity;
  if (city) {
    validCity = city;
  } else {
    validCity = "";
  }
  return validCity;
};

/**
 * Check and return zipcode default if zipcode is undefined or null.
 * @param {string=} zipcode
 */
export const validateZipCode = zipcode => {
  let validZipCode;
  if (zipcode) {
    validZipCode = zipcode;
  } else {
    validZipCode = "";
  }
  return validZipCode;
};
