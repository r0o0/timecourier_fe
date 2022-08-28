import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const layoutProperties = defineProperties({
  properties: {
    display: ['none', 'block', 'inline', 'flex', 'inline-flex', 'grid'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  },
  shorthands: { flex: ['flexDirection'] },
});

export const layoutSprinkles = createSprinkles(layoutProperties);
