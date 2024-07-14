import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      danger?: string;
      success?: string;
      warning?: string;
      info?: string;
      link?: string;
    };
  }
}
