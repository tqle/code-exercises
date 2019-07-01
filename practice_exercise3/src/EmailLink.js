import React from "react";
import { validateEmail } from "./utils/linkUtil";

/**
 * Email Link extends link tag with
 * custom mailto: href to indicate link is an email.
 */
class EmailLink extends React.Component {
  render() {
    // Destructuring objects from props.
    let { email } = this.props;

    // Check for empty, undefined, null cases
    let validEmail = validateEmail(email);
    // FUTURE: Write a regex or pattern match if email is valid format

    return <a href={"mailto:" + validEmail}>{validEmail}</a>;
  }
}

export default EmailLink;
