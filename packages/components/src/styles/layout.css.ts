import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { important } from './tools';

const layoutProperties = defineProperties({
  properties: {
    display: ['none', 'block', 'inline', 'flex', 'inline-flex', 'grid'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  shorthands: { flex: ['flexDirection'] },
});

export const hideStyle = {
  position: important('absolute') as 'absolute',
  width: important('1px'),
  height: important('1px'),
  padding: important(0),
  margin: important('-1px'),
  overflow: important('hidden'),
  clip: important('rect(0, 0, 0, 0)'),
  whiteSpace: important('nowrap') as 'nowrap',
  border: important(0),
};


export const layoutSprinkles = createSprinkles(layoutProperties);
