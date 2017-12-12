import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl:'app/Employee/employee.component.html'
})

export class EmployeeComponent {
    firstname: string = 'Test';
    lastname: string = 'Angalur';
    gender: string = 'M';
    age: number = 32;
}