import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Jobs } from "./user.model";

@Injectable({
	providedIn: "root"
})
export class DataService {
	apiUrl = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=&location="

	constructor(private _http: HttpClient) {}
	getTypes() {
		return this._http.get(this.apiUrl);

			}

}
