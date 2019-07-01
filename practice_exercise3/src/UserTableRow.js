import React from "react";
import { Link } from "@reach/router";
import FormattedAddress from "./FormattedAddress";
import EmailLink from "./EmailLink";

class UserTableRow extends React.Component {
  render() {
    // Destructuring objects from props.
    const { id, name, username, email, address } = this.props;
    // Check address fields, cannot assume address is an object in all cases.
    const street = address && address.street;
    const suite = address && address.suite;
    const state = address && address.state;
    const city = address && address.city;
    const zipCode = address && address.zipCode;
    return (
      <tr>
        {/* Router link to details page */}
        <td className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
          <Link to={`/details/${id}`}>
            <h1>{name}</h1>
          </Link>
        </td>
        <td className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
          {username}
        </td>
        <td className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
          <EmailLink email={email}>{email}</EmailLink>
        </td>
        <td className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
          <FormattedAddress
            street={street}
            suite={suite}
            city={city}
            state={state}
            zipCode={zipCode}
          />
        </td>
      </tr>
    );
  }
}

export default UserTableRow;
