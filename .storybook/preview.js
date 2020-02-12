import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  let req = require.context("../webcad/frontend/src/stories", true, /.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));

  req = require.context("../webcad/frontend/src", true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withInfo);