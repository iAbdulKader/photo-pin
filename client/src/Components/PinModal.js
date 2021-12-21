import "../Styles/PinModal.css"

export default function PinModal({pin, togglePinModal}) {
 
  return (
      <div className="pin__modal__wrapper">
        <div className="pin__modal__container">
          <div className="header__part">
            <div>
              PhotpPin
            </div>
            <div onClick={togglePinModal} className="close__btn">
              &times;
            </div>
          </div>
          <img src={pin.url} alt="pin" />
          <p>{pin.title}</p>
          <p>{pin.description}</p>
          <p>{pin.destination}</p>
        </div>
      </div>
    )
}