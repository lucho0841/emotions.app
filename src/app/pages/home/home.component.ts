import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  result: string;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juan', result: "mal animo", total: 25},
  {position: 2, name: 'Luis', result: "mal animo", total: 29},
  {position: 3, name: 'Emerson', result: "buen animo", total: 90},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'result', 'total'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
