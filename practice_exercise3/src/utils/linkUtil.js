/**
 * Link Utility
 * Validate, format any link related properties
 * This includes phone numbers, URLs, emails.
 */

/**
 * Check and return e-mail default if state is undefined or null.
 * @param {string=} state
 */
export const validateEmail = email => {
  let validEmail;
  if (email) {
    validEmail = email;
  } else {
    validEmail = "";
  }
  return validEmail;
};

/**
 * Check and return e-mail default if state is undefined or null.
 * @param {string=} website
 */
export const validateWebSite = website => {
  let validWebSite;
  if (website) {
    validWebSite = website;
  } else {
    validWebSite = "";
  }
  return validWebSite;
};

/**
 * Check and return e-mail default if state is undefined or null.
 * @param {string=} website
 */
export const validatePhone = phone => {
  let validPhone;
  if (phone) {
    validPhone = phone;
  } else {
    validPhone = "";
  }
  return validPhone;
};
