const Manager = require("../lib/Manager");

//Find office in manager constructor function
test("office found using Manager constructor", () => {
    const employee = new Manager("David", "1", "daviddowell1@gmail.com", "1234");
    expect(employee.office).toBe("1234");
})

//getOffice method and getRole method tested
test("getOffice method to grab the office number", () => {
    const employee = new Manager("David", "1", "daviddowell@gmail.com", "1234");
    expect(employee.getOffice()).toBe("1234")
})

test("getRole method to grab Manager string", () => {
    const employee = new Manager("David", "1", "daviddowell@gmail.com", "1234", "Manager")
    expect(employee.getRole()).toBe("Manager")
})
