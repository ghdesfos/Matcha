import fetchDataUnsplashAPI from "../services/fetchDataAPI";

// Does not work to mock the return value of fatch as what we should mock is the return of fetch() + .json()...

describe("tests fetchDataUnsplashAPI - normal values returned", () => {
  test("test = 1", () => {
    const mockSuccessResponse = [
      { urls: { small: "abc" } },
      { urls: { small: "def" } },
    ];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const result = fetchDataUnsplashAPI();
    expect(result).toBe([]);
  });

  test("tests fetchDataUnsplashAPI - empty array returned", () => {});

  test("tests fetchDataUnsplashAPI - non-empty array returned, but missing required fields", () => {});
});
