const { Router } = require("express")
const router = Router();
const employeesController = require("../controllers/employees.controllers")

router.get("/get", employeesController.getEmployee)
router.get("/get_all", employeesController.getEmployees)
router.post("/insert", employeesController.createEmployee)
router.put("/update", employeesController.updateEmployee)
router.delete("/delete", employeesController.deleteEmployee)

module.exports = router
