import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  employees: any;
  employee: any;

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }
  listAll(){
    this.empService.getEmployees().subscribe(res => {
      if(res){
        this.employees = res['data']
      }
    }, err => {
      console.log(err);
      return err;
    })
  }
  delete(id){
    this.empService.delete(id).subscribe(res => {
      if(res){
        alert("deleted successfully")
      }
    }, err => {
      alert(err)
    })
  }
  getById(e){
    this.empService.getById(e).subscribe(res => {
      if(res){
        this.employee = res['data']
      }
    }, err => {
      return err;
    })

  }

}
