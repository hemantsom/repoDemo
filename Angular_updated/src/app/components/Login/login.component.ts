import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() { }
  
  login(username, password) {
    if (username === 'oe' && password === 'oe') {
      console.log('in oe');
      sessionStorage.setItem('role', 'oe');
      this.router.navigateByUrl('role/oe/oedash');
    }
    if (username === 're' && password === 're') {
      console.log('in re');
      sessionStorage.setItem('role', 're');
      this.router.navigateByUrl('role/re/redash');
    }
    if (username === 'oh' && password === 'oh') {
      console.log('in oe');
      sessionStorage.setItem('role', 'oh');
      this.router.navigateByUrl('role/oh/ohdash');
    }
    if (username === 'ah' && password === 'ah') {
      console.log('in re');
      sessionStorage.setItem('role', 'ah');
      this.router.navigateByUrl('role/ah/ahdash');
    }
    if (username === 'cm' && password === 'cm') {
      console.log('in oe');
      sessionStorage.setItem('role', 'cm');
      this.router.navigateByUrl('role/cm/cmdash');
    }
    if (username === 'ho' && password === 'ho') {
      console.log('in re');
      sessionStorage.setItem('role', 'ho');
      this.router.navigateByUrl('role/ho/hodash');
    }
    if (username === 'th' && password === 'th') {
      console.log('in re');
      sessionStorage.setItem('role', 'th');
      this.router.navigateByUrl('role/th/thdash');
    }
    if (username === 'lh' && password === 'lh') {
      console.log('in re');
      sessionStorage.setItem('role', 'lh');
      this.router.navigateByUrl('role/lh/lhdash');
    }

  }
}