import React from "react";
import { create } from "react-test-renderer";
import UserTableRow from "../UserTableRow";

/**
 * Test User Table Row snapshot
 */
test("snapshot", () => {
  const test = create(<UserTableRow />);
  expect(test.toJSON()).toMatchSnapshot();
});
