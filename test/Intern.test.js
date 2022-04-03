const { expect, it } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    // test constructor
    describe("Test Properties", () => {
        it("should ...... ", () => {
            const intern = new Intern("Jonathan", 28, "jonathandila@yahoo.com");
            expect(intern.name).toEqual("Jonathan");
            expect(intern.id).toEqual(28);
            expect(intern.email).toEqual("jonathandila@yahoo.com");
        });
    });

    //test getSchool()
    describe("test getSchool", () => {
        it('should retrieve school', () => {
            const intern = new Intern('Jonathan', 28, 'jonathandila@yahoo.com', 'smu')
            const school = intern.getSchool()
            expect(school).toEqual('smu');
        });
    });

    //test getRole()
    describe("test getRole", () => {
        it("test method", () => {
            const intern = new Intern("Jonathan", 28, "jonathandila@yahoo.com", "Intern");
            const role = intern.getRole();
            expect(role).toEqual("Intern");
        });
    });
});
