/**
 * Company Utility
 * Validate, format any company related properties
 */

/**
 * Check and return company name default if state is undefined or null.
 * @param {string=} company
 */
export const validateCompanyName = company => {
  let validCompanyName = "";
  if (company) {
    validCompanyName = company;
  } else {
    validCompanyName = "";
  }
  return validCompanyName;
};

/**
 * Check and return company catch phrase default if state is undefined or null.
 * @param {*} catchPhrase
 */
export const validateCompanyCatchPhrase = catchPhrase => {
  let validCompanyCatchPhrase;
  if (catchPhrase) {
    validCompanyCatchPhrase = catchPhrase;
  } else {
    validCompanyCatchPhrase = "";
  }
  return validCompanyCatchPhrase;
};

/**
 * Check and return company bs default if state is undefined or null.
 * @param {string=} bs
 */
export const validateCompanyBS = bs => {
  let validCompanyBS;
  if (bs) {
    validCompanyBS = bs;
  } else {
    validCompanyBS = "";
  }
  return validCompanyBS;
};
