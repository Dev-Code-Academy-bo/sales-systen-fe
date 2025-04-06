import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-list',
  imports: [],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss'
})
export class DataListComponent implements OnChanges {

  @Input() dataList!: any[];

  public columns: string[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataList']) {
      this.dataList.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!this.columns.includes(key)) {
            this.columns.push(key);
          }
        });
      });
      console.log(this.columns);
    }
  }
}
