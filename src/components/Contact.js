import "../styles/contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <div className="contact-field">
      <h1>Contact</h1>
      <p className="contact-p">Hey, my name is Florian i´m a webdeveloper. If you like my app check out my other Projects on Github and feel free to get in touch. </p>
      
      <div className="socials">
        <div> <a href="https://github.com/itzFlorian" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="icon" icon={faGithub} /></a></div>
        <div> <a href="https://www.linkedin.com/in/florian-mewes-947649240" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="icon" icon={faLinkedin} /></a></div>
      </div>
    </div>
  );
};

export default Contact;