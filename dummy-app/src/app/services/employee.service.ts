import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class EmployeeService {
        // tslint:disable: forin

    constructor(private httpClient: HttpClient) {

    }
    getEmployees() {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return this.httpClient.get(`${environment.service_url}/api/v1/employees`, { headers:headers });
    } 
    getById(id){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return this.httpClient.get(`${environment.service_url}/api/v1/employee/${id}`, { headers:headers });
    } 

    delete(id){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return this.httpClient.delete(`${environment.service_url}/api/v1/delete/${id}`, { headers:headers });
    }


}