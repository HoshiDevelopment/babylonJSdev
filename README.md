# Element 5 Documentation

## Page 1

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


## Page 2

Recolouring the torus to make it reflect, using 2 different textures to create a funny looking blend.
```js
  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/textures/lavatile.jpg", scene);
  texture.diffuseColor = new Color3(0.6, 0.6, 1);
  torus.material = texture;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/textures/floorn.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  torus.material = texture;
  return torus;
```

I have rotated the original cone upside down and added sphere on top of it giving myself a wood flavoured ice cream.
```js
  cone.rotation.z = 3.14
```

Here is the code for a sphere on top of the cone to finish the ice cream.

```js

function createSphere2(scene: Scene) {
  let sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 1, segments: 32 },
    scene
  );
  sphere.position.x = 1;
  sphere.position.y = 1.8;
  sphere.position.z = -1;
  var texture = new StandardMaterial("grass1", scene);
  texture.emissiveTexture = new Texture("./assets/textures/wood.jpg", scene);
  sphere.material = texture;
  return sphere;
}

```