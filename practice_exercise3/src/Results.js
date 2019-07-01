import React from "react";
import UserTableRow from "./UserTableRow";
import axios from "axios";

const SAMPLE_USERS_URL = "http://jsonplaceholder.typicode.com/users";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      users: [], // initial empty state for users
      error: null
    };
  }

  // Fetch users and map the users state once mounted
  // set state users is the same as
  // users: users - same as just users
  componentDidMount() {
    // User isLoading to hide or show progress indicator
    this.setState({ isLoading: true });

    axios
      .get(SAMPLE_USERS_URL)
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
    const { error, users } = this.state;

    // Return error message if request or response fails and has an error message.
    // TODO: Add Error Boundary
    if (this.state.error) {
      // TODO: Refactor error message container to new component.
      return <div className="margin-top margin-left">ERROR: {error}</div>;
    } else {
      // if (this.state.isLoading) {
      //   <h1>Loading...</h1>;
      // } else {
      // test
      // TODO: Refactor sort name by descending order as separate re-usable util function
      const sortNameByDescendingOrder = []
        .concat(users)
        .sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase())
        .map(user => (
          <UserTableRow
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
          />
        ));
      return (
        <div>
          {/* <pre>
            <code>{JSON.stringify(this.state, null, 4)}</code>
          </pre> */}
          <table className="table container-border neutral-background-color">
            <thead>
              <tr>
                <th className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
                  Name
                </th>
                <th className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
                  UserName
                </th>
                <th className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
                  E-mail
                </th>
                <th className="cell-border text-align-left small-padding-top small-padding-right small-padding-left small-padding-bottom">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>{sortNameByDescendingOrder}</tbody>
          </table>
        </div>
      );
      // end test
      // }
    }
  }
}

export default Results;
