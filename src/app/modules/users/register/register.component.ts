import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={
    email: '',
    password: '',
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.register(this.user)
      .subscribe(data=>{
        console.log(data);
        alert("Usuario creado");
      })
  }

}
