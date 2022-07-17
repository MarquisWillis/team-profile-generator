const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it ("should be assigned 3 properties, return Intern for role, and also have school", () => {
        const intern = new Intern("John", 1, "johnDoe@yahoo.com", "OSU");

        expect(intern.getName()).toBe("John");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toBe("johnDoe@yahoo.com");

        expect(intern.getRole()).toBe("Intern");
        expect(intern.getSchool()).toBe("OSU");
    })
})