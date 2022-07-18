import { server } from "../../../mocks/server";
import axios from "axios";
import { loadLocationsThunk } from "../locationThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loginUserThunk", () => {
  describe("When invoked and a error thrown", () => {
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

      jest.spyOn(axios, "get").mockImplementation(() => {
        throw new Error();
      });
      const dispatch = jest.fn();

      const thunk = loadLocationsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedFirstCall);
      expect(dispatch).toHaveBeenCalledWith(expectedSecondCall);
      expect(dispatch).toHaveBeenCalledWith(expectedThirdCall);
    });
  });
});
