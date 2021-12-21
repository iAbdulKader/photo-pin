export default function Pin({pin}){
  return(
    <div className="wrapper">
      <div className="pin__box center">
        <img src={pin.url} alt="pin" />
      </div>
    </div>
    )
}