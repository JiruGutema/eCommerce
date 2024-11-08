import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or concerns, please feel free to contact us
        using the information below:
      </p>
      <div className="contact-info">
        <h2>Phone Number</h2>
        <p>714556748</p>
        <h2>Email</h2>
        <p>
          <a href="mailto:jethior1@gmail.com">jethior1@gmail.com</a>
        </p>
        <h2>Address</h2>
        <p>Arada Main Street, Addis Ababa, Ethiopia</p>
      </div>
    </div>
  );
}
export default Contact;
