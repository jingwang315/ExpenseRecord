import { Component, OnInit } from '@angular/core';
import { Record  } from '../record';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-expense-record-page',
  templateUrl: './expense-record-page.component.html',
  styleUrls: ['./expense-record-page.component.css']
})
export class ExpenseRecordPageComponent implements OnInit {

  clicked_item: Record = {id:'', description:'', type:'', amount:0, date:''};
  records: Record[] = [];
  recordsDisplay:any[] = [];

  constructor(private service: HttpService) {
  }

  ngOnInit(): void{
    this.getItems();
  }

  getItems() {
    this.service.getItems().subscribe(  data => {
      console.log(data);
      this.records = data;
      this.recordsDisplay = this.records;
    });
  }

  moniterChange(event:any){
    console.log(event.target.value);
  }

  save():void {

    this.service.insertItems(this.clicked_item).subscribe(()=>location.reload());

  };

    delete(id: string): void{
    console.log(id);
    this.service.deleteItems(id).subscribe(()=>location.reload());
    console.log("deleted");
  }

}
