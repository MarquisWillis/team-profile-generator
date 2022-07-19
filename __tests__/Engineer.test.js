const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it ("should be assigned 4 properties, including github property and addititonal getGithub method", () => {
        // create a new instance of the Engineer subclass to test the properties and methods to ensure they work
        const engineer = new Engineer("John", 1, "johnDoe@yahoo.com", "johnDoee");

        // testing get methods of super class in subclass Engineer (tests properties and methods simultaneously)
        expect(engineer.getName()).toBe("John");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toBe("johnDoe@yahoo.com");

        // testing override methods and properties of subclass Engineer that extend from superclass Employee
        expect(engineer.getRole()).toBe("🕶️ Engineer");
        expect(engineer.getGithub()).toBe("johnDoee");
    })
})