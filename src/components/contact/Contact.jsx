import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import "./contact.css";
import { Icons } from "../icons";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const form = useRef();

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      await emailjs.sendForm(
        "service_w5v0nqu",
        "template_ll7v08f",
        form.current,
        "PB1yGPAMX_mmArctF"
      );
      setSubmitResult({ success: true, message: "Message sent successfully!" });
      event.target.reset();
    } catch (error) {
      console.log(error);
      setSubmitResult({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">vinubailoor@gmail.com</span>

              <a
                href="mailto:vinubailoor@gamil.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Vinayak Hegde</span>

              <a
                href="https://www.linkedin.com/in/vinayak-hegde-1492a71a1"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-twitter contact__card-icon"></i>

              <h3 className="contact__card-title">Twitter</h3>
              <span className="contact__card-data">@vinayakhegde8</span>

              <a
                href="https://twitter.com/vinayakhegde8"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
                aria-required="true"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact__form-input"
                placeholder="Insert your mail"
                required
                aria-required="true"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex" disabled={isSubmitting}>
              {isSubmitting ? "Sending" : "Send Message"}
              {isSubmitting ? (
                <Icons.loading
                  className="button__icon"
                  width={22}
                  height={22}
                />
              ) : (
                <Icons.send />
              )}
            </button>
          </form>
          {submitResult && (
            <div
              className={`submit-result ${
                submitResult.success ? "success" : "error"
              }`}
            >
              {submitResult.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
