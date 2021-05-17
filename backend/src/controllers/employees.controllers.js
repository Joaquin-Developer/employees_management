const employeesController = {}
const Employee = require("../modules/Employee")

employeesController.getEmployees = async (req, res) => {
    const allEmployees = await Employee.find()
    res.json(allEmployees)
}

employeesController.getEmployee = async (req, res) => {
    const employeeFound = await Employee.findOne({ _id: req.params.id })
    res.json(employeeFound)
}

employeesController.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)
    console.log(newEmployee)
    await newEmployee.save()
    res.json({ status: true, message: "Employee created" })
}

employeesController.updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: true, message: "Employee updated!" })
}

employeesController.deleteEmployee = async (req, res) => {
    const deletedEmployeed = await Employee.findByIdAndDelete(req.params.id)
    res.json({ status: true, message: "eliminado correctamente", employedDeleted: deletedEmployeed })
}

module.exports = employeesController
