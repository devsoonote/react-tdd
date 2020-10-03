import { storyFactory } from '../test/testUtils'
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train'
  describe('no guessed words', () => {
    let store
    const initialState = { secretWord }
    beforeEach(() => {
      store = storyFactory(initialState)
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: false,
        guessWord: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
      }
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessWord: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }]
      }
      expect(newState).toEqual(expectedState)
    })
  })
  describe('some guessed words', () => {
    const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 }]
    const initialState = { guessedWords, secretWord }
    let store;
    beforeEach(() => {
      store = storyFactory(initialState)
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
      }
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        success: true,
        guessWord: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})
