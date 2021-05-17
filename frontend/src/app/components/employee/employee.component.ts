import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmployees: Employee[];
  selectedEmployee: Employee = {
    name: "", office: "", position: ""
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

  addEmployee(form: NgForm) {
    console.log(form.value)
    this.employeeService.createEmployee(form.value).subscribe(
      resp => {
        console.log(resp);
        this.getEmployees();
      },
      e => console.log(e)
    )

  }


}
