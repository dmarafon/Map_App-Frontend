import { rest } from "msw";
import { setupServer } from "msw/lib/node";
import { loadLocationsThunk } from "../locationThunks";

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_URL}locations/marks`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  )
);

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
        payload: undefined,
        type: "ui/finishedLoading",
      };

      const expectedThirdActionType = {
        payload: "No Markers",
        type: "ui/apiResponse",
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
