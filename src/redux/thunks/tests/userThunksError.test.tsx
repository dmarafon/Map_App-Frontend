import { loginUserThunk, registerUserThunk } from "../userThunks";
import { server } from "../../../mocks/server";
import axios from "axios";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({
    id: "1234",
    email: "test@test.com",
    firstName: "testName",
  })
);

describe("Given the loginUserThunk", () => {
  describe("When invoked and a error thrown", () => {
    const userTest = {
      password: "1234",
      email: "test@test.com",
    };
    test("Then the dispatch function will be called with the type 'ui/loading' 'ui/finishedLoadin' and 'ui/piResponse", async () => {
      const expectedFirstCall = { payload: undefined, type: "ui/loading" };

      const expectedSecondCall = {
        payload: undefined,
        type: "ui/finishedLoading",
      };
      const expectedThirdCall = {
        payload: "Unknown Error",
        type: "ui/apiResponse",
      };

      jest.spyOn(axios, "post").mockImplementation(() => {
        throw new Error();
      });
      const dispatch = jest.fn();

      const thunk = loginUserThunk(userTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedFirstCall);
      expect(dispatch).toHaveBeenCalledWith(expectedSecondCall);
      expect(dispatch).toHaveBeenCalledWith(expectedThirdCall);
    });
  });
});

describe("Given the registerThunk", () => {
  describe("When invoked and a error thrown", () => {
    jest.spyOn(axios, "post").mockImplementation(() => {
      throw new Error();
    });

    const userTest = {
      firstname: "testName",
      surname: "testsurnam",
      email: "test@supertest.com",
      password: "1234",
      city: "Barcelona",
      country: "Spain",
    };
    test("Then the dispatch function will be called", async () => {
      const expectedFirstCall = { payload: undefined, type: "ui/loading" };

      const expectedSecondCall = {
        payload: "Unknown Error",
        type: "ui/apiResponse",
      };
      const expectedThirdCall = {
        payload: undefined,
        type: "ui/finishedLoading",
      };

      const dispatch = jest.fn();

      const thunk = registerUserThunk(userTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedFirstCall);
      expect(dispatch).toHaveBeenCalledWith(expectedSecondCall);
      expect(dispatch).toHaveBeenCalledWith(expectedThirdCall);
    });
  });
});
