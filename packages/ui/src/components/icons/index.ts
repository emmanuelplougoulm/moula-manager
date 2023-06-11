import type { App, Component } from 'vue';

export default {
  install(app: App) {
    const components: Record<string, Component> = import.meta.glob('./*.vue', {
      import: 'default',
      eager: true
    });
    Object.entries(components).forEach(([path, component]): void => {
      const pathSplit = path.split('/');
      const fileName = pathSplit[pathSplit.length - 1].split('.vue')[0];
      app.component(fileName, component);
    });

    const svgComponents: Record<string, Component> = import.meta.glob('../../assets/svg/*.svg', {
      import: 'default',
      eager: true
    });
    Object.entries(svgComponents).forEach(([path, component]): void => {
      const pathSplit = path.split('/');
      const fileName = pathSplit[pathSplit.length - 1].split('.svg')[0];
      app.component(fileName, component);
    });
  }
};
