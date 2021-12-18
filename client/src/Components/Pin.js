export default function Pin({url}){
  return(
    <div className="wrapper">
      <div className="pin__box center">
        <img src={url} alt="pin" />
      </div>
    </div>
    )
}