import{K as o,d as p,e as t}from"./index-BzDWVz2l.js";function f(l){switch(l){case 35916:return 33776;case 35918:return 33778;case 35919:return 33779;case 37493:return 37492;case 37497:return 37496;case 37495:return 37494;case 37840:return 37808;case 36493:return 36492}return null}class d{constructor(){this.supportCascades=!1}loadCubeData(n,e,r,i){if(Array.isArray(n))return;e._invertVScale=!e.invertY;const a=e.getEngine(),s=new o(n,6),g=s.numberOfMipmapLevels>1&&e.generateMipMaps;a._unpackFlipY(!0),s.uploadLevels(e,e.generateMipMaps),e.width=s.pixelWidth,e.height=s.pixelHeight,a._setCubeMapTextureParams(e,g,s.numberOfMipmapLevels-1),e.isReady=!0,e.onLoadedObservable.notifyObservers(e),e.onLoadedObservable.clear(),i&&i()}loadData(n,e,r,i){if(o.IsValid(n)){e._invertVScale=!e.invertY;const a=new o(n,1),s=f(a.glInternalFormat);s?(e.format=s,e._useSRGBBuffer=e.getEngine()._getUseSRGBBuffer(!0,e.generateMipMaps),e._gammaSpace=!0):e.format=a.glInternalFormat,r(a.pixelWidth,a.pixelHeight,e.generateMipMaps,!0,()=>{a.uploadLevels(e,e.generateMipMaps)},a.isInvalid)}else p.IsValid(n)?new p(e.getEngine())._uploadAsync(n,e,i).then(()=>{r(e.width,e.height,e.generateMipMaps,!0,()=>{},!1)},s=>{t.Warn(`Failed to load KTX2 texture data: ${s.message}`),r(0,0,!1,!1,()=>{},!0)}):(t.Error("texture missing KTX identifier"),r(0,0,!1,!1,()=>{},!0))}}export{d as _KTXTextureLoader};
