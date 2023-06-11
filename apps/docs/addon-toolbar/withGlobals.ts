import type { DecoratorFunction } from '@storybook/addons';
import { useEffect, useState } from '@storybook/addons';

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  // Get selected theme in global type;
  const { theme } = context.globals;
  // Create a state to save the current theme
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(() => {
    // We retrieve the current theme link in the head
    const head: Element = document.getElementsByTagName('HEAD')[0];
    const currentThemeLink = document.querySelector(`link[data-theme="${currentTheme}"]`);
    //and if the theme exist we remove the link
    if (currentThemeLink) {
      head.removeChild(currentThemeLink);
    }
    // Create a new link for the new theme
    const themeVariableLink: HTMLLinkElement = document.createElement('link');
    themeVariableLink.rel = 'stylesheet';
    themeVariableLink.type = 'text/css';
    themeVariableLink.href = `../styles/theme-variables.css?inline`;
    head.appendChild(themeVariableLink);
    // Create a new link for the new theme
    const themeLink: HTMLLinkElement = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.type = 'text/css';
    themeLink.href = `../styles/theme.css?inline`;
    head.appendChild(themeLink);
    // Create a new link for the new theme
    const link: HTMLLinkElement = document.createElement('link');
    link.setAttribute('data-theme', theme);
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `../styles/color-scheme-${theme}.css?inline`;
    head.appendChild(link);

    //save the new theme as current theme
    setCurrentTheme(theme);
  }, [theme]);

  return StoryFn();
};
