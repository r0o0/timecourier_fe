import { LetterStatus } from '~/const';

export const isDraftLetter = (letterStatus: APISchema.LetterStatus) =>
  letterStatus === LetterStatus.DRAFT;

export const isDoneLetter = (letterStatus: APISchema.LetterStatus) =>
  letterStatus === LetterStatus.DONE;
