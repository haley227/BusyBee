import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  checked : boolean = true;
  showRecurrence(e): void {
    var isChecked = e.currentTarget.checked;
    
    console.log(e.currentTarget);//undefined
    console.log(this.checked);//it is working !!!
    if(isChecked == true){
      document.getElementById("recurrence").style.display = "block";
    }
    else{
      document.getElementById("recurrence").style.display = "none";
    }
  }
  
}
