import { Squares } from "./ui/Squares-background"

export function Background() {
  return (
    
      <div className="absolute z-0 h-full w-full">
        <Squares 
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
  )
}