function Modal(props) {
  function CancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }
  
  return (
    <div className="modal">
      <p>are you sure?</p>
      <button className="btn btn--alt" onClick={CancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
