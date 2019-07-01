import React from "react";
import { validatePhone } from "./utils/linkUtil";
/**
 * Phone Link extends link tag with
 * custom tel: href to indicate link is telephone number.
 */
class PhoneLink extends React.Component {
  render() {
    // Destructuring objects from props.
    let { phone } = this.props;
    // Check for empty, undefined, null cases
    let validPhone = validatePhone(phone);
    // FUTURE: Write a regex or pattern match if phone is valid phone format

    return (
      <a title={"Telephone:" + validPhone} href={"tel:" + validPhone}>
        {phone}
      </a>
    );
  }
}
export default PhoneLink;
