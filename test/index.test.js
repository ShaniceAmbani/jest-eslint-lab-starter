const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe("capitalizeWords", () => {

  test("capitalizes each word", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });

  test("handles empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("handles special characters", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });

  test("handles single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

});


describe("filterActiveUsers", () => {

  test("filters active users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false }
    ];

    expect(filterActiveUsers(users)).toEqual([
      { name: "Alice", isActive: true }
    ]);
  });

  test("all inactive users", () => {
    const users = [
      { name: "Bob", isActive: false }
    ];

    expect(filterActiveUsers(users)).toEqual([]);
  });

  test("empty array", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });

});


describe("logAction", () => {

  test("returns correct format", () => {
    const result = logAction("login", "Alice");
    expect(result).toContain("User Alice performed login at");
  });

  test("missing action", () => {
    const result = logAction("", "Alice");
    expect(result).toContain("User Alice performed");
  });

  test("missing username", () => {
    const result = logAction("login", "");
    expect(result).toContain("User");
  });

});