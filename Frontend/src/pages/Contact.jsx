

const Contact = () => {
    return (
        <div className="contact-form-box">
            <div className="contact-title">
                <p>Write something</p>
                <div className="contact-title-border" />
            </div>
            <form className="contact-form">
                <div className="contact-input-box">
                    <div className="contact-input">
                        <label htmlFor="name">Your Name*</label>
                        <input type="text" id="name" />
                    </div>
                    <div className="contact-input">
                        <label htmlFor="email">Your Email*</label>
                        <input type="text" id="email" />
                    </div>
                </div>
                <div className="contact-input-box">
                    <div className="contact-input">
                        <label htmlFor="phone">Phone Number*</label>
                        <input type="text" id="phone" />
                    </div>
                    <div className="contact-input">
                        <label htmlFor="company">Company (Optional)</label>
                        <input type="text" id="company" />
                    </div>
                </div>
                <div className="contact-textfield">
                    <label htmlFor="message">Something write*</label>
                    <textarea name="message" id="" cols="20" rows="6"></textarea>
                </div>
                <div className="contact-checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
                <div className="contact-button">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
