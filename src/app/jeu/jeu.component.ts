import { Component, Input, OnInit } from '@angular/core';
import { JeuService } from '../services/jeu.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {
  @Input ()  jeuName: string;
  @Input ()  jeuOnAir: string;
  @Input ()  jeuAffiche: string;
  @Input ()  synopsis: string;
  @Input ()  date: string;
  @Input ()  id: number;

  constructor(
    private Jeu: JeuService
  ) { }

  ngOnInit() {
  }

  getOnAir() {
    return this.jeuOnAir;
  }

  
  changeColor() {

     switch (this.jeuOnAir) {
       case "PS5":
         return "blue";        
       case "Xbox":
         return "green";
       case "PC":
         return "grey";
       case "Switch":
         return "red";
    
       default:
         return "black";

    // // //  if (this.jeuOnAir == "Blue Ray") {
    // // //    return "purple";  
    // // //  }    
    // // //  else if (this.jeuOnAir == "En Salle") {
    // // //    return "red";
    // // //  } 
    // // //  else {
    // // //    console.log("Error: Unexpected onAir value");      
    // // //  }
    }
  }

  removeJeu(id: any) {
    this.Jeu.deleteJeu(id);
  }
}
