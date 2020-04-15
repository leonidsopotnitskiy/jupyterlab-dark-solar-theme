import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for jupyterlab_dark_solar_theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_dark_solar_theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = 'jupyterlab_dark_solar_theme/index.css';

    manager.register({
      name: 'jupyterlab_dark_solar_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
