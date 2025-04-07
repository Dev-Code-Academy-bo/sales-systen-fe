import { Directive, ElementRef, EventEmitter, Host, HostListener, inject, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';

@Directive({
  selector: '[confirmModal]'
})
export class ConfirmModalDirective {
  private _matDialog:  MatDialog= inject(MatDialog);

  @Output() deleteItem: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  @HostListener('click', ['$event'])
  public onClick(event: Event): void {
    const modalRef = this._matDialog.open(ConfirmModalComponent);

    modalRef.afterClosed().subscribe((confirm)=> {
      if(confirm){
        this.deleteItem.emit();
      }
    })
  }
}
