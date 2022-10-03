const Engineer = require("../lib/Engineer");


//Extends employee class, so name, ID, and email are already part of Engineer
test("gitHub found using Engineer constructor", () => {
    const employee = new Engineer("David", "1", "daviddowell@gmail.com", "DavidDowell");
    expect(employee.gitHub).toBe("DavidDowell");
})

//methods
test("getGitHub method to grab engineer github username", () => {
    const employee = new Engineer("David", "1", "daviddowell@gmail.com", "DavidDowell");
    expect(employee.getGitHub()).toBe("DavidDowell")
})

test("getRole method to grab the engineer string", () => {
    const employee = new Engineer("David", "1", "daviddowell@gmail.com", "DavidDowell", "Engineer");
    expect(employee.getRole()).toBe("Engineer");
})