# Element 5 Documentation

The following code below makes usage of light.diffuse, light.specular, and light.groundColo

- light.diffuse represents the RGB formatted colour that is shone onto the object. in this case i set the value to 1 in the BLUE position to shine a blue light onto it.
- light.specular is a highlight colour, i chose to keep this blue also
- light.groundColor represents the colour of the shadow or rather one is created when the light is note shone on it past the object, I have given it a 1 value of RED to create a nice pink colour in the middle and the red as the shadow on the other side.

```js
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
    light.intensity = 2;
    light.diffuse = new Color3(0, 0, 1);
    light.specular = new Color3(0, 0, 1);
    light.groundColor = new Color3(1, 0, 0);
    return light;
  }
```
