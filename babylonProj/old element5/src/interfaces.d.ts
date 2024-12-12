import {
  Scene,
  Mesh,
  HemisphericLight,
  Camera,
  ISceneLoaderAsyncResult,
} from "@babylonjs/core";

export interface SceneData {
  scene: Scene;
  ground: Mesh;
  sky: Mesh;
  lightHemispheric: HemisphericLight;
  camera: Camera;
  plane: Promise<void | ISceneLoaderAsyncResult>;
}
