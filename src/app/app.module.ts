import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptureAreaComponent } from './capture-area/capture-area.component';
import { ShortcutsRenderComponent } from './shortcuts-render/shortcuts-render.component';
import { OptionComponent } from './option/option.component';
import { ClipboardCopyComponent } from './clipboard-copy/clipboard-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureAreaComponent,
    ShortcutsRenderComponent,
    OptionComponent,
    ClipboardCopyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
