import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-clipboard-copy',
  templateUrl: './clipboard-copy.component.html',
  styleUrls: ['./clipboard-copy.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "aria-label": "Copy",
    role: "button",
    tabindex: "0",
    '[class.copying]': "copying",
    '[class.disabled]': "value === ''",
    '(click)': "copy()"
  }
})
export class ClipboardCopyComponent implements OnInit {

  @Input() value: string = "";
  copying = false;
  successTime = -1;

  constructor(private clipboard: Clipboard, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  copy(): void {
    this.copying = true;
    this.clipboard.copy(this.value);
    this.successTime = setTimeout(() => {
      this.copying = false;
      this.cdr.markForCheck();
    }, 1000);
  }
}
