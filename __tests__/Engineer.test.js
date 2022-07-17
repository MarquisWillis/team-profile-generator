const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it ("should be assigned 3 properties, and also have github", () => {
        const engineer = new Engineer("John", 1, "johnDoe@yahoo.com", "johnDoee");

        expect(engineer.getName()).toBe("John");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toBe("johnDoe@yahoo.com");

        expect(engineer.getRole()).toBe("Engineer");
        expect(engineer.getGithub()).toBe("johnDoee");
    })
})