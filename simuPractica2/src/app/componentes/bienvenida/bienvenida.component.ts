import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

  public jsonApi: any;


  constructor(private http: HttpClient)
  {
    
  }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/AgustinReal').subscribe(dataApi => 
    {this.jsonApi = dataApi; console.log(this.jsonApi);}
    );
  }
}
