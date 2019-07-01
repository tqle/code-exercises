import React from "react";
import { Link } from "@reach/router";

import FormattedAddress from "./FormattedAddress";
import EmailLink from "./EmailLink";

class User extends React.Component {
  render() {
    // Destructuring objects from props.
    const { id, name, username, email, address } = this.props;

    return (
      <div>
        {/* Router link to details page */}
        <Link to={`/details/${id}`}>
          <h1>{name}</h1>
        </Link>
        <div>{username}</div>
        <EmailLink email={email} />
        <FormattedAddress address={address} />
      </div>
    );
  }
}

export default User;
