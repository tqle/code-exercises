import React from "react";
import { create } from "react-test-renderer";
import WebLink from "../WebLink";

/**
 * Test Web Link snapshot
 */
test("<WebLink /> renders correctly", () => {
  const test = create(<WebLink website="kale.biz" />);
  expect(test.toJSON()).toMatchSnapshot();
});

test("<WebLink /> renders as an anchor when no web site reference is set", () => {
  const test = create(<WebLink>Kale.biz</WebLink>).toJSON();
  expect(test).toMatchSnapshot();
});
