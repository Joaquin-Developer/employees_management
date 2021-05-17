import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee'
import { NgForm } from '@angular/forms'
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Employee[];
  selectedEmployee: any = {
    name: "", office: "", position: "", _id: ""
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      resp => this.allEmployees = resp,
      e => console.error(e)
    )
  }

  // edit button (in table)
  editEmployee(employee: Employee) {
    this.selectedEmployee = employee;
    console.log(this.selectedEmployee);
  }
  
  addEmployee(form?: NgForm) {
    console.log("Id:", form.value._id)

    if (form.value._id) {
      // updated
      this.employeeService.updatedEmployee(this.selectedEmployee).subscribe(
        resp => {
          alert("Employeed deleted"!)
          this.getEmployees()      
        },
        e => {
          console.log(e)
          alert("Error")
        }
      )
      form.reset();

    } else {
      // add employee
      this.employeeService.createEmployee(form.value).subscribe(
        resp => {
          console.log(resp);
          this.getEmployees();
          form.reset();
        },
        e => console.log(e)
      )
    }
  }

  // delete btn (in table)
  deleteEmployee(id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.employeeService.deleteEmployee(id).subscribe(
        resp => {
          console.log(resp)
          alert("Employeed deleted"!)
          this.getEmployees()         
        },
        e => console.log(e)
      )
    }
  }


}
