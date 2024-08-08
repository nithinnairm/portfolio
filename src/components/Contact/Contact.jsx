const Contact = () => {
  return (
    <section id="contact">
      <h1 className="sectionTitle">Contact</h1>
      <form action="" className="contactForm">
        <div className="formGroup">
          <label htmlFor="name" className="name" hidden></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>{" "}
        <div className="formGroup">
          <label htmlFor="email" className="email" hidden></label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            required
          />
        </div>{" "}
        <div className="formGroup">
          <label htmlFor="message" className="message" hidden></label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
