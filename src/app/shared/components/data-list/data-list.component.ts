import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ConfirmModalDirective } from '../../directives/confirm-modal.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-list',
  imports: [ConfirmModalDirective, CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss',

})
export class DataListComponent implements OnChanges {

  @Input() dataList!: any[];
  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();

  public columns: string[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataList']) {
      this.dataList.forEach((item) => {
        Object.keys(item).forEach((key) => {
          if (!this.columns.includes(key) && key !== 'id') {
            this.columns.push(key);
          }
        });
      });
      console.log(this.columns);
    }
  }

  deleteItem(id: string): void {
    this.deleteEmitter.emit(id);
  }
}
