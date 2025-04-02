import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name : string;
    colors: {
      bgMain: string;
    }
  }
}
