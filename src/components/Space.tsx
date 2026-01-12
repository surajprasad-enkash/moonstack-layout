interface SpaceProps {
  size?: number; // space in px
}

export default function Space({ size = 100 }: SpaceProps) {
  return <div style={{ height: `${size}px` }} aria-hidden="true" />;
}