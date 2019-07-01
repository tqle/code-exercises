import React from "react";
import { create } from "react-test-renderer";
import User from "../User";

/**
 * Test User snapshot
 */
test("<User /> renders correctly with address object", () => {
  const id = "12345";
  const email = "johntest@sometest.com";
  const name = "John Test";
  const userName = "johnTest";

  const address = {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874"
  };

  const test = create(
    <User
      id={id}
      name={name}
      username={userName}
      email={email}
      address={address}
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});

test("<User /> renders correctly with address string", () => {
  const id = "12345";
  const email = "johntest@sometest.com";
  const name = "John Test";
  const userName = "johnTest";

  const address = {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874"
  };

  const test = create(
    <User
      id={id}
      name={name}
      username={userName}
      email={email}
      address={address}
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});
