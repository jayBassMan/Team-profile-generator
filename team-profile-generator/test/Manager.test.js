const { expect, it } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  // test constructor
  describe("Test Properties", () => {
    it("should ...... ", () => {
      const manager = new Manager("Jonathan", 28, "jonathandila@yahoo.com");
      expect(manager.name).toEqual("Jonathan");
      expect(manager.id).toEqual(28);
      expect(manager.email).toEqual("jonathandila@yahoo.com");
    });
  });

  //test getRole()
  describe("test getRole method", () => {
    it("test method", () => {
      const manager = new Manager("Jonathan", 28, "jonathandila@yahoo.com", "Manager");
      const role = manager.getRole();
      expect(role).toEqual("Manager");
    });
  });
});
