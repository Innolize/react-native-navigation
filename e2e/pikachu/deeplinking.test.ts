import fetchMock from 'fetch-mock';
import {device, element, expect, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
      url: 'enjoyremote://app/pikachu',
    });
  });

  beforeEach(async () => {
    fetchMock.restore();
    await device.reloadReactNative();
  });

  it('Should find the "Pikachu" button', async () => {
    // const mockedData = {
    //   id: 1,
    //   name: 'bulbasaur',
    //   image:
    //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    // };
    // fetchMock.mock('https://pokeapi.co/api/v2/pokemon/pikachu', mockedData);
    await expect(element(by.id('pikachu-id'))).toBeVisible();
    console.log(2);
    await expect(element(by.id('pikachu-name'))).toExist();
    console.log(3);
    await expect(element(by.id('pikachu-image'))).toBeVisible();
    console.log(4);

    // await expect(pikachuButton).toBeVisible();
  });
});
