import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms'

import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { TeamPageComponent } from './views/team-page/team-page.component';
import { TeamListComponent } from './views/team-list/team-list.component';
import { TeamCardComponent } from './views/team-list/team-card/team-card.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { PlayerCardComponent } from './views/team-page/player-card/player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TeamPageComponent,
    TeamListComponent,
    TeamCardComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]
})
export class AppModule { }
