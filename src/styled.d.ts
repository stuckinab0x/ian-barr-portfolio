import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name : string;
    colors: {
      bgMain: string;
      bgSecondary: string;
      contentInnerA: string;
      contentInnerB: string;
    }
  }
}
