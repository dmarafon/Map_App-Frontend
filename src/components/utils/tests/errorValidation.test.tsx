import {
  errorLoginValidation,
  errorRegistrationValidation,
} from "../errorValidation";

describe("Given a errorLoginValidation function", () => {
  describe("When its invoked passing an object with the necessary properties", () => {
    test("Then it should return the string message in the object 'Test Message', minus the last letter, as 'Test Messag", () => {
      const expectedErrorString = "Test Messag";
      const expectedErrorSent = {
        response: { data: { msg: "Test Message", message: "" } },
      };

      const errorValidation = errorLoginValidation(expectedErrorSent);

      expect(errorValidation).toBe(expectedErrorString);
    });
  });
});

describe("When its invoked passing an object with the message that starts with 'Email or pa'", () => {
  test("Then it should return the string message 'Email Invalid'", () => {
    const expectedErrorString = "Email Invalid";
    const expectedErrorSent = {
      response: { data: { message: "Email or pa" } },
    };

    const errorValidation = errorLoginValidation(expectedErrorSent);

    expect(errorValidation).toBe(expectedErrorString);
  });
});

describe("When its invoked passing an undefinied parameter to it", () => {
  test("Then it should return the error message 'Unknown Error'", () => {
    const expectedErrorString = "Unknown Error";
    const expectedErrorSent = {
      response: {},
    };

    const errorValidation = errorLoginValidation(expectedErrorSent);

    expect(errorValidation).toBe(expectedErrorString);
  });
});

describe("Given a errorRegistrationValidation function", () => {
  describe("When its invoked passing an object with the necessary properties", () => {
    test("Then it should return the string message in the object 'Test Message', minus the last 4 letters, as 'Test Messag", () => {
      const expectedErrorString = "Test Mes";
      const expectedErrorSent = {
        response: { data: { message: "Test Message" } },
      };

      const errorValidation = errorRegistrationValidation(expectedErrorSent);

      expect(errorValidation).toBe(expectedErrorString);
    });
  });
});

describe("When its invoked passing an object with the string 'Bad Request'", () => {
  test("Then it should return the exact same message", () => {
    const expectedErrorString = "Bad Request";
    const expectedErrorSent = {
      response: { data: { message: "Bad Request" } },
    };

    const errorValidation = errorRegistrationValidation(expectedErrorSent);

    expect(errorValidation).toBe(expectedErrorString);
  });
});

describe("When its invoked passing an undefinied parameter", () => {
  test("Then it should return the message 'Unkwnown Error", () => {
    const expectedErrorString = "Unknown Error";
    const expectedErrorSent = {
      response: {},
    };

    const errorValidation = errorRegistrationValidation(expectedErrorSent);

    expect(errorValidation).toBe(expectedErrorString);
  });
});
