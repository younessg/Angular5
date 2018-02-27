import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentOne } from './component-one/component.one';
import { ComponentTwo } from './component-two/component.two';
import { SeniorsService } from './services/seniors.service';

@NgModule({

  declarations: [AppComponent, ComponentOne, ComponentTwo],

  imports: [BrowserModule, FormsModule],

  providers: [SeniorsService],

  bootstrap: [AppComponent]

})
export class AppModule {}
