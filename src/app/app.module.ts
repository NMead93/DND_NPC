import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { firebaseAuth } from './firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { CreateService } from './create.service';
import { SliderModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { DiceComponent } from './dice/dice.component';
import { NpcDetailComponent } from './npc-detail/npc-detail.component';

export const firebaseConfig = {
  apiKey: firebaseAuth.apiKey,
  authDomain: firebaseAuth.authDomain,
  databaseURL: firebaseAuth.databaseURL,
  storageBucket: firebaseAuth.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DiceComponent,
    NpcDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SliderModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule
  ],
  providers: [CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
