describe("Async/Await Hell", () => {
  let originalConsoleLog;
  let logSpy;

  // Store the original console.log function before running the test
  beforeAll(() => {
    originalConsoleLog = console.log;
  });

  // Create a spy that preserves the original behavior of console.log
  beforeEach(() => {
    logSpy = spyOn(console, "log").and.callThrough();
  });

  // After running the tests, restore the original console.log function
  afterAll(() => {
    console.log = originalConsoleLog;
  });

  // Testing Async/Await Hell
  it("should test for the function to be logged in order: 'Data fetched!' 'Data processed!' 'Data displayed!'", (done) => {
    // Execute the async function
    // await fetchDataAndProcessAsync();

    setTimeout(() => {
      // Assertions
      expect(logSpy.calls.allArgs()).toEqual([
        ["Data fetched!"],
        ["Data processed!"],
        ["Data displayed!"],
      ]);
      done();
    }, 1500);
  });
});
