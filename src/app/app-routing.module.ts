import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrivateComponent } from './components/private/private.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateComponent,
  },
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'forms',
    component: ReactiveComponent,
  },
  {
    path: 'option',
    component: OptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
