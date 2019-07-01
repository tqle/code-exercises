import React from "react";
import { create } from "react-test-renderer";
import User from "../User";

/**
 * Test User snapshot
 */
test("snapshot", () => {
  const test = create(<User />);
  expect(test.toJSON()).toMatchSnapshot();
});
