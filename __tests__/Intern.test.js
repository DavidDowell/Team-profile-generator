const Intern = require("../lib/Intern");

//Add school property to specific intern employee
test("school added using Intern constructor", () => {
    const employee = new Intern("David", "1", "daviddowell@gmail.com", "USM");
    expect(employee.school).toBe("USM");
});

//methods on Intern constructor
test("getSchool used to grab the intern's school", () => {
    const employee = new Intern("David", "1", "daviddowell@gmail.com", "USM");
    expect(employee.getSchool()).toBe("USM");
});

test("getRole method to enter Intern string", () => {
    const employee = new Intern("David", "1", "daviddowell@gmail.com", "Intern");
    expect(employee.getRole()).toBe('Intern');
})