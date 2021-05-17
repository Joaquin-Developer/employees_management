const employeesController = {}
const Employee = require("../modules/Employee")

employeesController.getEmployees = async (req, res) => {
    const allEmployees = await Employee.find()
    res.json(allEmployees)
}

employeesController.getEmployee = (req, res) => {
    res.send("get 1 employee")
}

employeesController.createEmployee = (req, res) => {
    const data = req.body
    console.log(data)
}

employeesController.updateEmployee = (req, res) => {

}

employeesController.deleteEmployee = (req, res) => {

}

module.exports = employeesController
