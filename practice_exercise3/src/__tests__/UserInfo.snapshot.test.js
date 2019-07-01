import React from "react";
import { create } from "react-test-renderer";
import UserInfo from "../UserInfo";

/**
 * Test User Info snapshot
 */
test("snapshot", () => {
  const test = create(<UserInfo />);
  expect(test.toJSON()).toMatchSnapshot();
});
