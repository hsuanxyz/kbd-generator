export enum SymbolsFormat {
  OnlySymbols = "ONLY_SYMBOLS",
  OnlyCharacters = "ONLY_CHARACTERS",
  SymbolsAndCharacters = "SYMBOLS_AND_CHARACTERS",
}


export interface FormatOption {
  symbols: SymbolsFormat;
  separator: boolean;
  shiftIn: boolean;
}
