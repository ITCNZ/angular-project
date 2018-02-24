import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const appRoutes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'about/:id',component: AboutComponent,
    children:[
      {path:'child', component:ChildComponent},
      {path:'child2', component:Child2Component}
    ]
  },
  {path: '**', component: NotfoundComponent}
];

