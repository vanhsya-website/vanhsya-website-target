declare module 'three'

declare module '@react-three/fiber' {
  export interface ThreeEvent {
    delta: number
    object: unknown
    point: { x: number; y: number; z: number }
    unprojectedPoint: { x: number; y: number; z: number }
    stopped: boolean
    nativeEvent: MouseEvent | TouchEvent
    type: string
    stopPropagation: () => void
  }
}
