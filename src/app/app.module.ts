import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateComponent } from './components/private/private.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OptionsComponent } from './options/options.component';
import { CustomHeroPipe } from './CustomHeroPipe';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    PrivateComponent,
    ReactiveComponent,
    OptionsComponent,
    CustomHeroPipe,
    FilterPipe,
    SortPipe,
    ObservableExampleComponent,
    Comp1Component,
    Comp2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
