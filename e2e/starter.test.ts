import {device, element, expect, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should find the "Pikachu" button', async () => {
    const pikachuButton = element(by.id('pikachu-button'));
    console.log(pikachuButton);
    console.log(1);
    await pikachuButton.tap();
    await expect(element(by.id('pikachu-id'))).toBeVisible();
    console.log(2);
    await expect(element(by.id('pikachu-name'))).toExist();
    console.log(3);
    await expect(element(by.id('pikachu-image'))).toBeVisible();
    console.log(4);

    // await expect(pikachuButton).toBeVisible();
  });
});
