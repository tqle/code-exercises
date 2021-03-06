import React from "react";
import { create } from "react-test-renderer";
import UserTableRow from "../UserTableRow";

/**
 * Test User Table Row snapshot
 */
test("<UserTableRow /> renders correctly", () => {
  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    }
  };
  const test = create(
    <UserTableRow
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
