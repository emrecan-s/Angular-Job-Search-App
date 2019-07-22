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
import {
  HeaderComponent
} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  jobs: any = [];
  header1: string = ""
  searchText: any = {
    location: ''
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getTypes().subscribe(data => this.displaydata(data));
  }

  displaydata(data) {
    this.jobs = data;

  }

}