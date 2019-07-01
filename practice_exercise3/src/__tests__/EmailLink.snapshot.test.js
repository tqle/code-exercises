import React from "react";
import { create } from "react-test-renderer";
import EmailLink from "../EmailLink";

/**
 * Test Email Link snapshot
 */
test("<Email /> renders correctly", () => {
  const email = "Julianne.OConner@kory.org";
  const test = create(<EmailLink email={email} />);
  expect(test.toJSON()).toMatchSnapshot();
});

test("<Email /> renders as an anchor when no email reference is set", () => {
  const email = "Julianne.OConner@kory.org";
  const test = create(<EmailLink>{email}</EmailLink>).toJSON();
  expect(test).toMatchSnapshot();
});
