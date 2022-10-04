const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="col-3 rounded mt-4 ml-3">
            <h3 class="text-center bg-primary w-100 text-light rounded m-0">${manager.getName()} ${manager.getRole()}</h3>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getID()}</li>
                <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOffice()}</li>
            </ul>
        </div>
        `;
    };
    const generateEngineer = (engineer) => {
        return `
        <div class=" col-3 rounded mt-4 ml-3">
            <h3 class="text-center bg-primary w-100 text-light rounded m-0">${engineer.getName()} ${engineer.getrole()}</h3>
            <li class="list-group-item">ID: ${engineer.getID()}</li>
            <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
            <li class="list-group-item"><a href="${engineer.getGitHub()}">GitHub: ${engineer.getGitHub()}</a></li>
        </div>
        `;
    };
    const generateIntern = (intern) => {
        return `
        <div class=" col-3 rounded mt-4 ml-3">
            <h3 class="text-center bg-primary w-100 text-light rounded m-0">${intern.getName()} ${intern.getRole()}</h3>
            <li class="list-group-item">ID: ${intern.getID()}</li>
            <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</a></li>
        </div>
        `
    }

    const employeeCards = [];
    employeeCards.push(
        team
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
            .join("")
    );
    employeeCards.push(
        team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );
    employeeCards.push(
        team
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
            .join("")
    );
    return employeeCards.join("");
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Work Team</title>
    <link rel="stylesheet" href="./style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
</head>

<body class="row">
    <div class="col-12 navbar bg-info hero">
        <h1 class="w-100 text-center text-light">My Team</h1>
    </div>
    <div class="col-12 d-flex justify-content-center team">
        ${generateTeam(team)}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
</body>
      `;
};