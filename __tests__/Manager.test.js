const Manager =  require('../lib/Manager');

describe("Manager class", () => {
    it ("should be assigned 3 properties, return Manager for role, and also have school", () => {
        // create a new instance of Manager subclass to test properties and methods
        const manager = new Manager("John", 1, "johnDoe@yahoo.com", "12345");

        // testing superclass properties and methods
        expect(manager.getName()).toBe("John");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toBe("johnDoe@yahoo.com");

        //testing subclass properties and methods
        expect(manager.getRole()).toBe("Manager");
        expect(manager.getOfficeNumber()).toBe("12345");
    })
})