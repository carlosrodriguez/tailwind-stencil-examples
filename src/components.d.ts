/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface NormalCss {
    'greeting': string;
  }
  interface ScopedCss {
    'greeting': string;
  }
  interface ShadowCss {
    'greeting': string;
  }
  interface ShadowCssUsingVariables {
    'greeting': string;
  }
  interface ThemedCard {
    'cardDescription': string;
    'pills': string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  const HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLNormalCssElement extends Components.NormalCss, HTMLStencilElement {}
  const HTMLNormalCssElement: {
    prototype: HTMLNormalCssElement;
    new (): HTMLNormalCssElement;
  };

  interface HTMLScopedCssElement extends Components.ScopedCss, HTMLStencilElement {}
  const HTMLScopedCssElement: {
    prototype: HTMLScopedCssElement;
    new (): HTMLScopedCssElement;
  };

  interface HTMLShadowCssElement extends Components.ShadowCss, HTMLStencilElement {}
  const HTMLShadowCssElement: {
    prototype: HTMLShadowCssElement;
    new (): HTMLShadowCssElement;
  };

  interface HTMLShadowCssUsingVariablesElement extends Components.ShadowCssUsingVariables, HTMLStencilElement {}
  const HTMLShadowCssUsingVariablesElement: {
    prototype: HTMLShadowCssUsingVariablesElement;
    new (): HTMLShadowCssUsingVariablesElement;
  };

  interface HTMLThemedCardElement extends Components.ThemedCard, HTMLStencilElement {}
  const HTMLThemedCardElement: {
    prototype: HTMLThemedCardElement;
    new (): HTMLThemedCardElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'normal-css': HTMLNormalCssElement;
    'scoped-css': HTMLScopedCssElement;
    'shadow-css': HTMLShadowCssElement;
    'shadow-css-using-variables': HTMLShadowCssUsingVariablesElement;
    'themed-card': HTMLThemedCardElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface NormalCss {
    'greeting'?: string;
  }
  interface ScopedCss {
    'greeting'?: string;
  }
  interface ShadowCss {
    'greeting'?: string;
  }
  interface ShadowCssUsingVariables {
    'greeting'?: string;
  }
  interface ThemedCard {
    'cardDescription'?: string;
    'pills'?: string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'normal-css': NormalCss;
    'scoped-css': ScopedCss;
    'shadow-css': ShadowCss;
    'shadow-css-using-variables': ShadowCssUsingVariables;
    'themed-card': ThemedCard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'normal-css': LocalJSX.NormalCss & JSXBase.HTMLAttributes<HTMLNormalCssElement>;
      'scoped-css': LocalJSX.ScopedCss & JSXBase.HTMLAttributes<HTMLScopedCssElement>;
      'shadow-css': LocalJSX.ShadowCss & JSXBase.HTMLAttributes<HTMLShadowCssElement>;
      'shadow-css-using-variables': LocalJSX.ShadowCssUsingVariables & JSXBase.HTMLAttributes<HTMLShadowCssUsingVariablesElement>;
      'themed-card': LocalJSX.ThemedCard & JSXBase.HTMLAttributes<HTMLThemedCardElement>;
    }
  }
}


