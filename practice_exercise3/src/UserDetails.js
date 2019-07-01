import React from "react";
import UserInfo from "./UserInfo";
import { Link } from "@reach/router";
import axios from "axios";

const SAMPLE_USERS_URL = "http://jsonplaceholder.typicode.com/users?id=";

/**
 * User Details Container that creates a User Info Detail
 */
class UserDetails extends React.Component {
  // Default way with React without babel presets
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      users: [], // initial empty state for users
      error: null
    };
  }
  // Query user detail by ?id=<id>
  // Example: http://jsonplaceholder.typicode.com/users/?id=1
  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(SAMPLE_USERS_URL + this.props.id)
      .then(response => {
        // Response success
        const users = response.data;
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => {
        // Catch any request and response errors
        // Catch invalid url requests and response
        // ex. 404
        if (error.response) {
          this.setState({
            error: error.response.status,
            isLoading: false
          });
        }
      });
  }

  render() {
    // Return error message if request or response fails and has an error message.
    if (this.state.error) {
      return (
        <div>
          <Link className="margin-left" to="/">
            Back to Users
          </Link>
          <div className="margin-top margin-left">
            ERROR: {this.state.error}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="margin-left" to="/">
            Back to Users
          </Link>
          {this.state.users.map(user => {
            return (
              <UserInfo
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                website={user.website}
                company={user.company}
              />
            );
          })}
          {/* quick sanity test json code sample to see if it returns value. */}
          {/* <pre>
                <code>{JSON.stringify(this.state, null, 4)}</code>
              </pre> */}
        </div>
      );
    }
  }
}
export default UserDetails;
