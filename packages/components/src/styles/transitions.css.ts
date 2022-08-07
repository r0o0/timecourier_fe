import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const transitionSystem = {
  duration: {
    fast: '0.5s',
    normal: '1s',
    slow: '2s',
  },
  timing: {
    easeIn: 'cubic-bezier(0.67,-0.12, 0.38, 0.66)',
    easeOut: 'cubic-bezier(0.4, 0, 0.11, 0.98)',
    easeInOut: 'cubic-bezier(0.61, -0.16, 0.42, 1.14)',
  },
};

const transitionProperties = defineProperties({
  properties: {
    transitionDuration: transitionSystem.duration,
    transitionTimingFunction: transitionSystem.timing,
  },
  shorthands: {
    duration: ['transitionDuration'],
    timing: ['transitionTimingFunction'],
  },
});

export const transitions = createSprinkles(transitionProperties);

export type Transitions = Parameters<typeof transitions>[0];
