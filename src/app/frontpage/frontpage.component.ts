import { Component } from '@angular/core';
import { RefreshService } from '../service/refresh.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent {
response:any={}
error:any=''
bg:any=''
  constructor(private data:RefreshService){}
  

   click(){
let v = Math.floor(Math.random()*30+1)
console.log(v);

// api call function
this.data.random(v).subscribe({next:(response:any)=>{
  console.log(response);
  this.bg=response.eyeColor
  console.log(this.bg);
  
  this.response=response
 
},error:(err:any)=>{
 this.error=err
}})

   }


     
  
}
