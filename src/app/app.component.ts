import {
  Component,
  OnInit
} from '@angular/core';
import {
  Jobs
} from "./user.model";
import {
  DataService
} from './data.service';
import {
  NgModule
} from '@angular/core';
import {
  FilterPipe
} from 'ngx-filter-pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobs: any= [];
  searchText: any = {
    location: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getTypes().subscribe(data => this.displaydata(data));
  }

  displaydata(data) {
console.log(this.searchText);
    this.jobs = data;
    console.log(this.jobs)
  }

}