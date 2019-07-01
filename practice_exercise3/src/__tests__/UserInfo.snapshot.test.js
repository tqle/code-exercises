import React from "react";
import { create } from "react-test-renderer";
import UserInfo from "../UserInfo";

/**
 * Test User Info snapshot
 */

test("<UserInfo /> renders correctly", () => {
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
    <UserInfo
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

test("<UserInfo /> renders correctly", () => {
  const test = create(
    <UserInfo
      id="12345"
      name="John Test"
      username="johnTest"
      email="johntest@sometest.com"
      address="Hoeger Mall Apt. 692 South Elvis, FL, 53919-4257"
      phone="555-555-555"
      website="kale.biz"
      company="Kale Biz"
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});
