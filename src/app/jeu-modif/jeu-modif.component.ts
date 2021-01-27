import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JeuService } from '../services/jeu.service';

@Component({
  selector: 'app-jeu-modif',
  templateUrl: './jeu-modif.component.html',
  styleUrls: ['./jeu-modif.component.css']
})
export class JeuModifComponent implements OnInit {
  jeu: any;
  constructor(
    private Jeu: JeuService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.Jeu.GetJeuById(id).subscribe(res => {
      this.jeu = res;
    });
  }

  onModif () {
    this.Jeu.modifJeu (this.jeu).subscribe (res => {
      this.router.navigate (["/jeux"]);
    })
  }

}
