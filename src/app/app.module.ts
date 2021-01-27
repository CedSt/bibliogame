import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JeuService } from './services/jeu.service';
import { JeuModifComponent } from './jeu-modif/jeu-modif.component';
import { HomeComponent } from './home/home.component';
import { JeuListComponent } from './jeu-list/jeu-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JeuComponent } from './jeu/jeu.component';
import { JeuNewComponent } from './jeu-new/jeu-new.component';

const appRoutes: Routes = [
  {
    path: "jeux",
    component: JeuListComponent
  },
  {
    path: "new",
    component: JeuNewComponent
  },
  {
    path: "modif/:id",
    component: JeuModifComponent
  },
  {
    path: "",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    JeuModifComponent,
    JeuNewComponent,
    HomeComponent,
    JeuListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot (appRoutes)
  ],
  providers: [
    JeuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
