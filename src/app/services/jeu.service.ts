import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  constructor(
    private http: HttpClient
  ) {
    this.getJeu();
  }

  jeuSubject = new Subject<any[]>();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };

  private jeux = [
/*    {
      id : 1,
      name: "Jurassic Park",
      onAir: "Blue Ray",
      affiche: "https://i.pinimg.com/originals/9d/88/14/9d881461a420bf7d277014f26683c417.jpg"
    },

    {
      id : 2,
      name:"StarWars",
      onAir: "Blue Ray",
      affiche: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/175/star-wars-lascension-de-skywalker-affiche-saga-1175304.jpg"
    },

    {
      id : 3,
      name: "28 Jours plus tard",
      onAir: "En Salle",
      affiche: "https://www.fredzone.org/wp-content/uploads/2019/06/28-mois-plus-tard-640x360.jpg"
    },*/
  ];

  emitJeuSubject () {
    this.jeuSubject.next (this.jeux.slice());
  }

  setOnAir () {
    for (const i of this.jeux) {
      i.onAir = "En Salle";
    }
    this.emitJeuSubject();
  }

  setOnBR () {
    for (const iterator of this.jeux) {
      iterator.onAir = "Blue Ray";
    }
    this.emitJeuSubject();
  }

  switchOnAir (index: number) {
    this.jeux [index].onAir = "En Salle";
    this.emitJeuSubject();
  }

  switchOnBR (index: number) {
    this.jeux [index].onAir = "Blue Ray";
    this.emitJeuSubject();
  }

  GetJeuById (id: number) {
    return this.http.get<any>("/api/movies/" + id);
  }

  addJeu (jeu: any) {
    this.http.post<any>("/api/movies", jeu, this.httpOptions).subscribe(res => {
      this.jeux.push(res);
      this.emitJeuSubject();
    });
  }

  getJeu () {
    this.http.get<any>('/api/movies').subscribe((res) => {
      this.jeux = res;
      this.emitJeuSubject();
    });
  }

  modifJeu (jeu: any) {
    var index = this.jeux.findIndex (
      (jeuToModif) => {
        if (jeuToModif._id == jeu._id) {
          return true;
        }
      }
    )
    this.jeux.splice (index, 1, jeu);
    this.emitJeuSubject ();
    return this.http.put<any>("/api/movies/" + jeu._id, jeu, this.httpOptions);
  }

  deleteJeu (id: any) {
    this.http.delete<any>("/api/movies/" + id).subscribe(res => {
      var index = this.jeux.findIndex (
        (jeuToDelete) => {
          if(jeuToDelete._id == id) {
            return true;
          }
        }
      )
      this.jeux.splice(index, 1);
      this.emitJeuSubject();
    })
  }
}