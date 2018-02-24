import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { appRoutes } from './router';
import { UtilNet } from '../util/util.net';
import { UtilConfig } from '../util/util.config';
import { ApiUser } from '../api/api.user';

/**公共组件**/
import { ComponentModel } from '../common/components/model/component.model';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    ChildComponent,
    Child2Component,
    ComponentModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule
  ],
  providers: [UtilNet, UtilConfig, ApiUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
