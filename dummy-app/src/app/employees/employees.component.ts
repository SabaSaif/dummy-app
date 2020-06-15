import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {
  addForm :FormGroup;
  editForm: FormGroup;
  employees: any;
  employee: any;
  empById: boolean;
  add: boolean;
  editEmp: boolean;
  idOfEmp: any;

  constructor(private empService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.empById = false
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]]
    });
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]]
    });
  }
  get f() {
    return this.addForm.controls;
  }
  get e() {
    return this.editForm.controls;
  }

  addEmp(){
    this.add = true;
  }
  create(){
    console.log(this.f.name.value)
    this.empService.create(this.f.name.value, this.f.salary.value, this.f.age.value).subscribe(res => {
      if(res){
        alert("employee added successfully")
      }
    }, err => {
      alert(err.error.message)
    })
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
  editEmploy(id){
    this.editEmp = true;
    this.idOfEmp = id
  }
  edit(){
    console.log(this.e.name.value)
    this.empService.edit(this.idOfEmp, this.e.name.value , this.e.salary.value, this.e.age.value).subscribe(res => {
      if(res){
        alert("employee updated successfully")
      }
    }, err => {
      alert(err)
    })
  }
  getById(e){
    
    this.empService.getById(e).subscribe(res => {
      if(res){
        this.empById = true;
        this.employee = res['data']
      }
    }, err => {
      alert(err.error.message);
    })

  }

}
