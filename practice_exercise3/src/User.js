import React from "react";
import { Link } from "@reach/router";

import FormattedAddress from "./FormattedAddress";
import EmailLink from "./EmailLink";

class User extends React.Component {
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
      <div>
        {/* Router link to details page */}
        <Link to={`/details/${id}`}>
          <h1>{name}</h1>
        </Link>
        <div>{username}</div>
        <EmailLink email={email} />
        <FormattedAddress
          street={street}
          suite={suite}
          city={city}
          state={state}
          zipCode={zipCode}
        />
      </div>
    );
  }
}

export default User;
