import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/Employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = "http://localhost:5000/api/employees"

  constructor(private http: HttpClient) { }

  getEmployees(): any {
    return this.http.get<Employee[]>(this.URL_API + "/get_all");
  }

  createEmployee(employee: Employee) {
    return this.http.post((this.URL_API + "/insert"), employee);
  }

}
