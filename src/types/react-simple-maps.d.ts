declare module "react-simple-maps" {
  import * as React from "react"

  type Props = Record<string, unknown>

  export const ComposableMap: React.FC<Props>
  export const Geographies: React.FC<Props>
  export const Geography: React.FC<Props>
  export const Marker: React.FC<Props>
}
