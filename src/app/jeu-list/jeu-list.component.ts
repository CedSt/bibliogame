import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JeuService } from '../services/jeu.service';

@Component({
  selector: 'app-jeu-list',
  templateUrl: './jeu-list.component.html',
  styleUrls: ['./jeu-list.component.css']
})
export class JeuListComponent implements OnInit, OnDestroy {

  jeux: any = [];
  jeuSubscription: Subscription;
  
  constructor (
    private Jeu: JeuService
  ) {}

  ngOnInit () {
    this.jeuSubscription = this.Jeu.jeuSubject.subscribe ( (value) => {
      console.log(value)
      this.jeux = value
    });
    this.Jeu.emitJeuSubject();
  }

  ngOnDestroy() {
    this.jeuSubscription.unsubscribe();
  }
}
