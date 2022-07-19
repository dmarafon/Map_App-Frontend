import { mockMarks } from "../../../mocks/mockMarks";
import { server } from "../../../mocks/server";
import { loadLocationsThunk } from "../locationThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadLoactionsThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called with the type 'ui/loading', 'location/loadLocation' and 'ui/finishedLoading'", async () => {
      const expectedFirstActionType = {
        payload: undefined,
        type: "ui/loading",
      };

      const expectedSecondActionType = {
        type: "location/loadLocation",
        payload: mockMarks,
      };

      const expectedThirdActionType = {
        payload: undefined,
        type: "ui/finishedLoading",
      };

      const dispatch = jest.fn();

      const thunk = loadLocationsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedFirstActionType);
      expect(dispatch).toHaveBeenCalledWith(expectedSecondActionType);
      expect(dispatch).toHaveBeenCalledWith(expectedThirdActionType);
    });
  });
});
