const Employee = require('../lib/Employee');

//Employee constructor function tests
test("return employees name", () => {
    const employee = new Employee("David");
    expect(employee.name).toBe("David");
});

test("return employees id", () => {
    const employee = new Employee("David", "1");
    expect(employee.id).toBe("1");
});

test("return employees email", () => {
    const employee = new Employee("David", "1", "daviddowell@gmail.com");
    expect(employee.email).toBe("daviddowell@gmail.com");
});

test("return employees role", () => {
    const employee = new Employee("David", "1", "daviddowell@gamil.com", "employee");
    expect(employee.role).toBe("employee");
});

//methods

test("getName method used to grab employee name", () => {
    const employee = new Employee("David");
    expect(employee.getName()).toBe("David");
});

test("getID method used to grab employee ID", () => {
    const employee = new Employee("David", "1");
    expect(employee.getID()).toBe("1");
});

test("getEmail method to grab employee email", () => {
    const employee = new Employee("David", "1", "daviddowell@gmail.com");
    expect(employee.getEmail()).toBe("daviddowell@gmail.com");
});

test("getRole method to grab the employee job title", () => {
    const employee = new Employee("David", "1", "daviddowell@gmail.com", "employee");
    expect(employee.getRole()).toBe("employee");
});