// this exists here because the vue-leaflet project does not seem to have typescript types available
// or maybe I just couldn't find them
//
// so this manually adds typing to the vue-leaflet import
declare module '@vue-leaflet/vue-leaflet' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export = content

  import { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const LMap: DefineComponent<any, any, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const LTileLayer: DefineComponent<any, any, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const LPolygon: DefineComponent<any, any, any>
}
