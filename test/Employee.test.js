const { expect, it } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Employee', () => {
  // test consrcutor
  describe("Test Properties", () => {
    it("should ...... ", () => {
      const employee = new Employee("Jonathan", '28', "jonathandila@yahoo.com");
      expect(employee.name).toEqual("Jonathan");
      expect(employee.id).toEqual(28);
      expect(employee.email).toEqual("jonathandila@yahoo.com");
    });
  });

  // test getName()
  describe("test methods", () => {
    it("Test methods", () => {
      const employee = new Employee("Jonathan", 28, "jonathandila@yahoo.com");
      const name = employee.getName();
      expect(name).toEqual("Jonathan");
    });
  });

  // test getId()
  describe("test getID", () => {
    it("test methods", () => {
      const employee = new Employee("Jonathan", 28, "jonathandila@yahoo.com");
      const id = employee.getId();
      expect(id).toEqual("28");
    });
  });

  //test  getEmail()
  describe("test getEmail", () => {
      it("test methods", () => {
          const employee = new Employee("Jonathan", 28, "jonathandila@yahoo.com");
          const email = employee.getEmail();
          expect(email).toEqual("jonathandila@yahoo.com");

      })
  });

  //test getRole()
  describe("test getRole", () => {
      it("test method", () => {
          const employee = new Employee("Jonathan", 28, "jonathandila@yahoo.com", 'Employee');
          const role = employee.getRole();
          expect(role).toEqual('Employee')
      })
  })
});

