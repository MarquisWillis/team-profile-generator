const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it ("should be assigned 4 properties, return Intern for role, and also have school", () => {

        // create a new instance of the Intern subclass to test the properties and methods to ensure they work
        const intern = new Intern("John", 1, "johnDoe@yahoo.com", "OSU");

        // testing superclass properties and methods
        expect(intern.getName()).toBe("John");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toBe("johnDoe@yahoo.com");

        // testing subclass properties and methods
        expect(intern.getRole()).toBe("Intern");
        expect(intern.getSchool()).toBe("OSU");
    })
})