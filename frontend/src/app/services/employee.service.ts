import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/Employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // only in debug mode:
  URL_API = "http://localhost:5000/api/employees"

  constructor(private http: HttpClient) { }

  getEmployees(): any {
    return this.http.get<Employee[]>(`${this.URL_API}/get_all`);
  }

  createEmployee(employee: Employee) {
    return this.http.post(`${this.URL_API}/insert`, employee);
  }

  updatedEmployee(employee: Employee) {
    return this.http.put(`${this.URL_API}/update/${employee._id}`, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.URL_API}/delete/${id}`)
  }
}
