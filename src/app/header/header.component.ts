import {
	Component,
	OnInit,
	Output
} from '@angular/core';
import {
	AppComponent
} from './../app.component'
@Component({
	selector: 'app-header',
	template: ` <h1>{{header1}}</h1>`,
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() {}
	@Output() header1: string = "Find Your Dev Job";
	ngOnInit() {

	}

}