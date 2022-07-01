import { loginUserThunk, registerUserThunk } from "../userThunks";
import { server } from "../../../mocks/server";

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
  const userTest = {
    password: "1234",
    email: "test@test.com",
  };

  describe("When invoked", () => {
    test("Then the dispatch function will be called with the type 'ui/loading', 'user/login' and 'ui/finishedLoading'", async () => {
      const expectedFirstActionType = {
        payload: undefined,
        type: "ui/loading",
      };

      const expectedSecondActionType = {
        payload: undefined,
        type: "user/login",
      };

      const expectedThirdActionType = {
        payload: undefined,
        type: "ui/finishedLoading",
      };
      const dispatch = jest.fn();

      const thunk = loginUserThunk(userTest);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedFirstActionType);
      expect(dispatch).toHaveBeenCalledWith(expectedSecondActionType);
      expect(dispatch).toHaveBeenCalledWith(expectedThirdActionType);
    });
  });
});

describe("Given the registerUserThunk", () => {
  describe("When RegisterUserThunk is invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = registerUserThunk({
        firstname: "testName",
        surname: "testsurnam",
        email: "test@supertest.com",
        password: "1234",
        city: "testcity",
        country: "+11111111111",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
