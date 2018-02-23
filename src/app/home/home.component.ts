import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  id:number;
  data =[];
  fname:string;
  lname:string;
  dob:string;
  email:string;
  pno:number;
  fac:string;

  fname1:string;
  lname1:string;
  dob1:string;
  email1:string;
  pno1:number;
  fac1:string;
  

  f = ['karishma','krishna','vidushi','dhruv','raj'];

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.data.push({
      'fname':this.fname,
      'lname':this.lname,
      'dob':this.dob,
      'email':this.email,
      'pno':this.pno,
      'fac':this.fac,
    });
    this.fname = '';
    this.lname = '';
    this.dob = '';
    this.email = '';
    this.pno = NaN;
    this.fac = '';
  }

  edit(i){    
   this.fname1 = this.data[i]['fname'];
   this.lname1 = this.data[i]['lname'];
   this.dob1 = this.data[i]['dob'];
   this.email1 = this.data[i]['email'];
   this.pno1 = this.data[i]['pno'];
   this.fac1 = this.data[i]['fac'];
   this.id=i;

  }
  update(){
    this.data[this.id]['fname'] = this.fname1;
    this.data[this.id]['lname'] = this.lname1;
    this.data[this.id]['dob'] =this.dob1;
    this.data[this.id]['email'] = this.email1;
    this.data[this.id]['pno'] = this.pno1;
    this.data[this.id]['fac'] = this.fac1;
  
  }
  
  
  removeItem(i) {
    this.data.splice(i, 1);
  }
}
