import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptureAreaComponent } from './capture-area/capture-area.component';
import { ShortcutsRenderComponent } from './shortcuts-render/shortcuts-render.component';
import { OptionComponent } from './option/option.component';
import { ClipboardCopyComponent } from './clipboard-copy/clipboard-copy.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
