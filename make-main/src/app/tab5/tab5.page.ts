import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit, OnChanges {
  txt='Login com Google'
  constructor() { }
  userPhoto:any
  ngOnChanges(){
    this.userPhoto=sessionStorage.getItem('fotoPerfil');
    if(this.userPhoto!=null){
      this.txt='LogOut'
    }else{
      this.txt='Comprar'
    }
  }

  ngOnInit(){
    this.userPhoto=sessionStorage.getItem('fotoPerfil');
    if(this.userPhoto!=null){
      this.txt='LogOut'
    }else{
      this.txt='Comprar'
    }
  }


}
