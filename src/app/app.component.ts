import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {FormatOption, SymbolsFormat} from "./interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  keys: number[] = [16, 83, 221]

  option: FormatOption = {
    symbols: SymbolsFormat.SymbolsAndCharacters,
    separator: true,
    shiftIn: false
  };

  constructor(private cdr: ChangeDetectorRef) {
  }

  setShortcuts(keys: number[]): void {
    this.keys = keys;
    this.cdr.markForCheck();
  }
}
