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
    const { address } = this.props;
    //  User address utility to validate or format any address properties
    // for undefined or nulls.
    let state, street, suite, city, zipcode;
    let buildFormattedAddress = "";
    // Check for empty, undefined, null cases
    state = validateState(address && address.state);
    street = validateStreet(address && address.street);
    suite = validateSuite(address && address.suite);
    city = validateCity(address && address.city);
    zipcode = validateZipCode(address && address.zipcode);

    // Build address without site
    if (street && city && state && zipcode) {
      buildFormattedAddress = street + <br /> + city + "";
    }
    return (
      <address className="normal-style">
        {street} {suite} <br />
        {city}, {state}, {zipcode}
      </address>
    );
  }
}

export default FormattedAddress;
