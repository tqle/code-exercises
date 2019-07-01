import React from "react";
import {
  validateState,
  validateStreet,
  validateSuite,
  validateCity,
  validateZipCode
} from "./utils/addressUtil";

/**
 * Formatted Address
 * Custom format address content in the HTML Address element
 */
class FormattedAddress extends React.Component {
  render() {
    // Destructuring objects from props.
    const { street, suite, state, city, zipcode } = this.props;
    //  User address utility to validate or format any address properties
    // for undefined or nulls.
    let validStreet, validSuite, validState, validCity, validZipCode;
    // Check for empty, undefined, null cases
    validState = validateState(state);
    validStreet = validateStreet(street);
    validSuite = validateSuite(suite);
    validCity = validateCity(city);
    validZipCode = validateZipCode(zipcode);

    // Build address in the designated format

    return (
      <address className="normal-style">
        {validStreet} {validSuite} <br />
        {validCity}, {validState}, {validZipCode}
      </address>
    );
  }
}

export default FormattedAddress;
