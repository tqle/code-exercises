import React from "react";
import { create } from "react-test-renderer";
import UserDetails from "../UserDetails";

/**
 * Test User Details snapshot
 */
test("<UserDetails /> renders correctly", () => {
  const id = "12345";
  const email = "johntest@sometest.com";
  const name = "John Test";
  const userName = "johnTest";
  const website = "kale.biz";
  const companyName = "Kale Biz";
  const phone = "493-170-9623 x156";
  const address = {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874"
  };
  const test = create(
    <UserDetails
      id={id}
      name={name}
      username={userName}
      email={email}
      address={address}
      phone={phone}
      website={website}
      company={companyName}
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});
