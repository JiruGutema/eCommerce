import "./Alert.css";
function Alert() {
  function removeAlert() {
    document.getElementById("alertMessage").style.display = "none";
  }
  return (
    <>
      <div id="alertMessage">
        <div id="message"></div>
        <button onClick={removeAlert}>Ok</button>
      </div>
    </>
  );
}
export default Alert;
