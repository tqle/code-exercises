import React from "react";
import { create } from "react-test-renderer";
import FormattedAddress from "../FormattedAddress";

/**
 * Test Email Link snapshot
 */
test("<FormattedAddress /> renders correctly", () => {
  const street = "Kulas Light";
  const suite = "Apt. 556";
  const city = "Gwenborough";
  const state = "FL";
  const zipCode = "92998-3874";

  const test = create(
    <FormattedAddress
      street={street}
      suite={suite}
      city={city}
      state={state}
      zipCode={zipCode}
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});

test("<FormattedAddress /> renders correctly with no suite", () => {
  const street = "Kulas Light";
  const suite = "";
  const city = "Gwenborough";
  const state = "FL";
  const zipCode = "92998-3874";

  const test = create(
    <FormattedAddress
      street={street}
      suite={suite}
      city={city}
      state={state}
      zipCode={zipCode}
    />
  );
  expect(test.toJSON()).toMatchSnapshot();
});

test("<FormattedAddress /> renders an empty address", () => {
  const street = "";
  const suite = "";
  const city = "";
  const state = "";
  const zipCode = "";
  const test = create(
    <FormattedAddress
      street={street}
      suite={suite}
      city={city}
      state={state}
      zipCode={zipCode}
    />
  ).toJSON();
  expect(test).toMatchSnapshot();
});
