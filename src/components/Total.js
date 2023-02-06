const Total = (props) => {
    return (
      <div>
        <p>total of {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises'] + props.parts[3]['exercises']} exercises</p>
      </div>
    )
  }
  
  export default Total