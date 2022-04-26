import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {FormatOption, SymbolsFormat} from "../interface";


const keyCodeData = [
  { keycode: 27, name: ['Escape', '⎋'] },
  { keycode: 112, name: ['F1'] },
  { keycode: 113, name: ['F2'] },
  { keycode: 114, name: ['F3'] },
  { keycode: 115, name: ['F4'] },
  { keycode: 116, name: ['F5'] },
  { keycode: 117, name: ['F6'] },
  { keycode: 118, name: ['F7'] },
  { keycode: 119, name: ['F8'] },
  { keycode: 120, name: ['F9'] },
  { keycode: 121, name: ['F10'] },
  { keycode: 122, name: ['F11'] },
  { keycode: 123, name: ['F12'] },
  { keycode: 192, name: ['`'], shiftName: ['~'] },
  { keycode: 49, name: ['1'], shiftName: ['!'] },
  { keycode: 50, name: ['2'], shiftName: ['@'] },
  { keycode: 51, name: ['3'], shiftName: ['#'] },
  { keycode: 52, name: ['4'], shiftName: ['$'] },
  { keycode: 53, name: ['5'], shiftName: ['%'] },
  { keycode: 54, name: ['6'], shiftName: ['^'] },
  { keycode: 55, name: ['7'], shiftName: ['&'] },
  { keycode: 56, name: ['8'], shiftName: ['*'] },
  { keycode: 57, name: ['9'], shiftName: ['('] },
  { keycode: 48, name: ['0'], shiftName: [')'] },
  { keycode: 189, name: ['-'], shiftName: ['_'] },
  { keycode: 187, name: ['='], shiftName: ['＋'] },
  { keycode: 219, name: ['['], shiftName: ['{'] },
  { keycode: 221, name: [']'], shiftName: ['}'] },
  { keycode: 220, name: ['\\'], shiftName: ['|'] },
  { keycode: 186, name: [';'] , shiftName: [':']},
  { keycode: 222, name: ['\''], shiftName: ['"'] },
  { keycode: 188, name: [','] , shiftName: ['<']},
  { keycode: 190, name: ['.'] , shiftName: ['>']},
  { keycode: 191, name: ['/'] , shiftName: ['?']},
  { keycode: 8, name: ['Delete', '⌫'] },
  { keycode: 9, name: ['Tab', '⇥'] },
  { keycode: 81, name: ['Q'] },
  { keycode: 87, name: ['W'] },
  { keycode: 69, name: ['E'] },
  { keycode: 82, name: ['R'] },
  { keycode: 84, name: ['T'] },
  { keycode: 89, name: ['Y'] },
  { keycode: 85, name: ['U'] },
  { keycode: 73, name: ['I'] },
  { keycode: 79, name: ['O'] },
  { keycode: 80, name: ['P'] },
  { keycode: 20, name: ['CapsLock', '⇪'] },
  { keycode: 65, name: ['A'] },
  { keycode: 83, name: ['S'] },
  { keycode: 68, name: ['D'] },
  { keycode: 70, name: ['F'] },
  { keycode: 71, name: ['G'] },
  { keycode: 72, name: ['H'] },
  { keycode: 74, name: ['J'] },
  { keycode: 75, name: ['K'] },
  { keycode: 76, name: ['L'] },
  { keycode: 13, name: ['Enter', '⏎'] },
  { keycode: 16, name: ['Shift', '⇧'] },
  { keycode: 90, name: ['Z'] },
  { keycode: 88, name: ['X'] },
  { keycode: 67, name: ['C'] },
  { keycode: 86, name: ['V'] },
  { keycode: 66, name: ['B'] },
  { keycode: 78, name: ['N'] },
  { keycode: 77, name: ['M'] },
  { keycode: 17, name: ['Control', '⌃'] },
  { keycode: 18, name: ['Option', '⌥'] },
  { keycode: 91, name: ['Command', '⌘'] },
  { keycode: 32, name: ['Space'] },
  { keycode: 37, name: ['←'] },
  { keycode: 38, name: ['↑'] },
  { keycode: 39, name: ['→'] },
  { keycode: 40, name: ['↓'] },
];


@Component({
  selector: 'app-shortcuts-render',
  templateUrl: './shortcuts-render.component.html',
  styleUrls: ['./shortcuts-render.component.less'],
  preserveWhitespaces: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShortcutsRenderComponent implements OnChanges {

  @Input() keys: number[] = []
  @Input() option: FormatOption | null = null;

  symbolizeKeys: string[] = [];
  code: string = "";

  constructor() { }


  ngOnChanges(): void {
    const shift = this.keys.indexOf(16) !== -1;
    this.symbolizeKeys = this.keys
      .map(keycode => keyCodeData.find(key => key.keycode === keycode))
      .filter(key => !!key).map(key => {
        let c: string;
        let s: string;
        if(shift && key!.shiftName && this.option?.shiftIn) {
          c = key!.shiftName[0]
        } else {
          c = key!.name[0]
        }
        s = key!.name?.[1] ? `${key!.name?.[1]} ` : '';
        switch (this.option?.symbols) {
          case SymbolsFormat.SymbolsAndCharacters:
            return `${s}${c}`;
          case SymbolsFormat.OnlyCharacters:
            return c;
          case SymbolsFormat.OnlySymbols:
          default:
            return s ? s : c;
        }
      })
    this.code = this.symbolizeKeys.map(s => `<kbd>${s}</kbd>`).join(this.option?.separator ? " + " : " ");
  }

}
