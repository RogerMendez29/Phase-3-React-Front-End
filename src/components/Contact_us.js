import { React, useState } from "react";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    phone_number: "",
    email: "",
    comment: "",
  });
  function handleChange(event) {
    setformData({ ...formData, [event.target.name]: event.target.value });
  }
  function submitReview(e) {
    e.preventDefault();
    console.log(formData);
    fetch(" http://localhost:9292/reviews", {
      method: "POST",

      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });
  }
  return (
    <section className="container">
      <h1 className="h1-responsive font-weight-bold text-center my-4 text-white ">
        Contact us
      </h1>
      <p className="text-center w-responsive mx-auto mb-5 text-white">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className=" container justify-content-center row align-items-center">
        <div className=" col-md-9 mb-md-0 mb-5">
          <form
            onSubmit={submitReview}
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name" className="text-white">
                    Your name
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    onChange={handleChange}
                    type="tel"
                    id="phone"
                    name="phone_number"
                    className="form-control"
                  />
                  <label htmlFor="Phone Number" className="text-white">
                    Phone Number
                  </label>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  onChange={handleChange}
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
                <label htmlFor="email" className="text-white">
                  Your email
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    onChange={handleChange}
                    type="text"
                    id="message"
                    name="comment"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label htmlFor="message" className="text-white">
                    Your review
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center text-md-left">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <iframe
          className="map mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2579382388003!2d-82.45934588450754!3d28.441639899444787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2a7408fe81399%3A0xb85abc1fa27dc8e!2sCafe%20Masaryktown!5e0!3m2!1sen!2sus!4v1642629235465!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
