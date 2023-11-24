import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TouristComponent } from './tourist/tourist.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',redirectTo:'/tourist/home',pathMatch:'full'},
  {path:'tourist/home',component:TouristComponent},
  {path:'tourist/add',component:AddComponent},
  {path:'tourist/edit/:touristId',component:EditComponent},
  {path:'tourist/view/:touristId',component:ViewComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
