import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JeuService } from '../services/jeu.service';

@Component({
  selector: 'app-jeu-new',
  templateUrl: './jeu-new.component.html',
  styleUrls: ['./jeu-new.component.css']
})
export class JeuNewComponent implements OnInit {

  newJeu: any;

  constructor(
    private Jeu: JeuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newJeu = {
      title: null,
      affiche: null,
      onAir: null,
      synopsis: null,
      date: null
    };
  }


  onSaveJeu () {
    // console.log("New jeu", this.newJeu);    
    this.Jeu.addJeu (this.newJeu);
    this.router.navigate (['/jeux']);
  }

}
