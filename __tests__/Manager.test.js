const Manager =  require('../lib/Manager');

describe("Manager class", () => {
    it ("should be assigned 3 properties, return Manager for role, and also have school", () => {
        const manager = new Manager("John", 1, "johnDoe@yahoo.com", "12345");

        expect(manager.getName()).toBe("John");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toBe("johnDoe@yahoo.com");

        expect(manager.getRole()).toBe("Manager");
        expect(manager.getOfficeNumber()).toBe("12345");
    })
})