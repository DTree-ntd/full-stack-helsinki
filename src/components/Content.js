import Part from "./Part"

const Content = (props) => {
  const { parts } = props
  return parts.map((part) => <Part key={part.name} part={part.name} exercises={part.exercises}></Part>)
}
  
  export default Content