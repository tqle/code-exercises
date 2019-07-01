import React from "react";
import { create } from "react-test-renderer";
import Results from "../Results";

/**
 * Test User Table Results snapshot
 */
test("<Results /> renders correctly", () => {
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  };
  const test = create(
    <Results
      key={user.id}
      id={user.id}
      name={user.name}
      username={user.username}
      email={user.email}
      address={user.address}
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});
