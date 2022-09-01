import { Component, OnInit, Input} from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-detials',
  templateUrl: './item-detials.component.html',
  styleUrls: ['./item-detials.component.css']
})
export class ItemDetialsComponent implements OnInit {
@Input() item= '';
 @Output() newItemEvent = new EventEmitter<string>();
 addNewItem(value: string){
  this.newItemEvent.emit(value);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
