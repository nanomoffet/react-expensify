export interface Styles {
  'app': string;
  'appLogo': string;
  'App-logo-spin': string;
  'appHeader': string;
  'appLink': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
