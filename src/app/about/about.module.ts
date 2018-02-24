import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';
//
// import { AboutComponent } from '../about/about.component';
// import { ChildComponent } from '../child/child.component';
// import { Child2Component } from '../child2/child2.component';
//
// export const aboutRoutes: Routes = [
//   {
//     // path: '',
//     // component: AboutComponent,
//     children:[
//       {path:'', component:AboutComponent},
//       {path:'child', component:ChildComponent},
//       {path:'child2', component:Child2Component}
//     ]
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AboutModule { }
