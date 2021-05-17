const { Router } = require("express")
const router = Router();
const employeesController = require("../controllers/employees.controllers")

router.get("/get/:id", employeesController.getEmployee)
router.get("/get_all", employeesController.getEmployees)
router.post("/insert", employeesController.createEmployee)
router.put("/update:id", employeesController.updateEmployee)
router.delete("/delete:id", employeesController.deleteEmployee)

module.exports = router
