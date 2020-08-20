import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Forside: {
            screens: {
              Forside: 'Forside',
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          CityForcast: {
            screens: {
              CityForcast: 'CityForcast',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
