import "./Alert.css";
function Alert() {
  function removeAlert() {
    document.getElementById("alert").style.display = "none";
  }
  return (
    <>
      <div id="alert">
        <div id="alertMessage">
          <div id="message"></div>
          <button onClick={removeAlert}>Ok</button>
        </div>
      </div>
    </>
  );
}
export default Alert;
