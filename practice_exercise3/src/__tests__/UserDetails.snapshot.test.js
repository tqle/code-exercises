import React from "react";
import { create } from "react-test-renderer";
import UserDetails from "../UserDetails";

/**
 * Test User Details snapshot
 */
test("snapshot", () => {
  const test = create(<UserDetails />);
  expect(test.toJSON()).toMatchSnapshot();
});
