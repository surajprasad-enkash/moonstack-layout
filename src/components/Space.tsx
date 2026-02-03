interface SpaceProps {
  size?: number // space in px
  mobileSize?: number
}

export default function Space({ size = 100, mobileSize = 60 }: SpaceProps) {
  return (
    <div
      className={` md:h-[${size}px] h-[${mobileSize}px]`}
      aria-hidden="true"
    />
  )
}
