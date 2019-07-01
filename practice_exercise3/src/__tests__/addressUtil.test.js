// import { validateState } from "./addressUtil";

test("Test Truthines address state: null", () => {
  const state = null;
  expect(state).toBeNull(), expect(state).toBeDefined();
  expect(state).not.toBeUndefined();
  expect(state).not.toBeTruthy();
  expect(state).toBeFalsy();
});

// test("Test Truthines address state with validateState: null", () => {
//   const state = null;
//   expect(validateState(state)).toBeNull();
//   expect(validateState(state)).toBeDefined();
//   expect(validateState(state)).not.toBeUndefined();
//   expect(validateState(state)).not.toBeTruthy();
//   expect(validateState(state)).toBeFalsy();
// });
