const { expect, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // test consrcutor
  describe("Test Properties", () => {
    it("should ...... ", () => {
      const engineer = new Engineer("Jonathan", 28, "jonathandila@yahoo.com");
      expect(engineer.name).toEqual("Jonathan");
      expect(engineer.id).toEqual(28);
      expect(engineer.email).toEqual("jonathandila@yahoo.com");
    });
  });


  //test getRole()
  describe("test getRole", () => {
    it("test method", () => {
      const engineer = new Engineer("Jonathan", 28, "jonathandila@yahoo.com", "Engineer");
      const role = engineer.getRole();
      expect(role).toEqual("Engineer");
    });
  });
});
