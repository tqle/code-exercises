import React from "react";
import { create } from "react-test-renderer";
import PhoneLink from "../PhoneLink";

/**
 * Test Phone Link snapshot
 */
test("<PhoneLink />renders correctly", () => {
  const phone = "493-170-9623 x156";
  const test = create(<PhoneLink phone={phone} />);
  expect(test.toJSON()).toMatchSnapshot();
});

test("<PhoneLink /> renders as an anchor when no phone number reference is set", () => {
  const phone = "493-170-9623 x156";
  const test = create(<PhoneLink>{phone}</PhoneLink>).toJSON();
  expect(test).toMatchSnapshot();
});
