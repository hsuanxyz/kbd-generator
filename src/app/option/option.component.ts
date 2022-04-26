import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";
import {FormatOption, SymbolsFormat} from "../interface";

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.less']
})
export class OptionComponent implements OnDestroy {

  readonly symbolsFormats = SymbolsFormat;

  @Output() optionChanged = new EventEmitter<FormatOption>();

  form: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      symbols: [SymbolsFormat.SymbolsAndCharacters],
      separator: [true],
      shiftIn: [false]
    });

    this.form.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.optionChanged.emit(data)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
