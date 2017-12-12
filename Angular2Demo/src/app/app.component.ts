import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template:`<div>
    <span>{{pageHeader}}</span>
    <my-employee></my-employee>
</div>`
})

export class AppComponent {
    pageHeader: string = "Employee Details";
}