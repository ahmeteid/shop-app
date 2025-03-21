import Swal from "sweetalert2";
import BackBtn from "../components/BackBtn";
import "../styles/Contact.css";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "2cd04358-d5d3-40f8-83b7-e8450ecd2994");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Your Message Has Sent!",
        icon: "success",
      });
      form.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! please check your Email",
      });
    }
  };

  return (
    <>
      <div className="contact-page">
        <BackBtn />
        <h1 className="title-text">Contact us</h1>
        <form onSubmit={onSubmit} className="form-content">
          <div>
            <label className="label-text">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Name"
              className="input-text"
            />
          </div>
          <div>
            <label className="label-text">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Email"
              className="input-text"
            />
          </div>
          <div>
            <label className="label-text">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Enter Subject"
              className="input-text"
            />
          </div>
          <div>
            <label className="label-text">Message</label>
            <textarea
              placeholder="Enter Message"
              name="message"
              required
              rows="4"
              className="message"
            ></textarea>
          </div>
          <button type="submit" className="form-btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
