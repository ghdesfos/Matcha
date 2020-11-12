import fetchDataUnsplashAPI from "./fetchDataAPI";

function mockGlobalFetch(returnValue: any) {
  const mockJsonPromise = Promise.resolve(returnValue);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
}

describe("all tests - service fetchDataUnsplashAPI", () => {
  test("tests fetchDataUnsplashAPI - API returns normal values", async () => {
    mockGlobalFetch([{ urls: { small: "url1" } }, { urls: { small: "url2" } }]);

    var result = await fetchDataUnsplashAPI();
    result[0].name = "Emilie";
    result[1].name = "Emilie";

    const expected = [
      { name: "Emilie", image: "url1" },
      { name: "Emilie", image: "url2" },
    ];

    expect(result).toMatchObject(expected);
  });

  test("tests fetchDataUnsplashAPI - API returns empty array", async () => {
    mockGlobalFetch([]);

    var result = await fetchDataUnsplashAPI();
    const expected: any[] = [];

    expect(result).toMatchObject(expected);
  });

  test("tests fetchDataUnsplashAPI - API resturns non-empty array, but with missing required fields", async () => {
    mockGlobalFetch([{ urls: { large: "url1" } }, { urls: { large: "url2" } }]);

    var result = await fetchDataUnsplashAPI();
    const expected: any[] = [];

    expect(result).toMatchObject(expected);
  });
});
