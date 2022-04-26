import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, NgZone} from '@angular/core';
import hotkeys from "hotkeys-js";

@Component({
  selector: 'app-capture-area',
  templateUrl: './capture-area.component.html',
  styleUrls: ['./capture-area.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'tabindex': "-1"
  }
})
export class CaptureAreaComponent implements OnInit {

  @Output() keysCaptured = new EventEmitter<number[]>()

  constructor(private elementRef: ElementRef<HTMLElement>, private ngZone: NgZone) { }

  ngOnInit(): void {
   this.ngZone.runOutsideAngular(() => {
     hotkeys('*', {
       element: this.elementRef.nativeElement
     }, (e) => {
       e.preventDefault();
       this.ngZone.run(() => {
         this.keysCaptured.emit(hotkeys.getPressedKeyCodes())
       })
     })
   })
  }


}
