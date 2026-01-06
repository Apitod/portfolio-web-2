import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Design/Contact.css";
import SpotlightCard from "../components/SpotlightCard";
import LogoLoop from "../components/LogoLoop";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = (import.meta.env as any).VITE_EMAILJS_SERVICE_ID || "service_ukkr5gw";
      const templateId = (import.meta.env as any).VITE_EMAILJS_TEMPLATE_ID || "template_c1a6fvn";
      const publicKey = (import.meta.env as any).VITE_EMAILJS_PUBLIC_KEY || "p9IrYq5k8jneoDWpJ";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "razandirgham@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ContactContainer">
      <div className="ContactWrapper">
        <SpotlightCard className="ContactCard" spotlightColor="rgba(132, 0, 255, 0.15)">
          <div className="ContactContent">
            <h1 className="ContactTitle">Get in Touch with me!</h1>

            <div className="ContactGrid">
              <div className="ContactInfo">
                <h2 className="InfoTitle">Contact Information</h2>
                <div className="InfoItem">
                  <span className="InfoLabel">Email:</span>
                  <a href="mailto:razandirgham@gmail.com" className="InfoLink">
                    razandirgham@gmail.com
                  </a>
                </div>
                <div className="InfoItem">
                  <span className="InfoLabel">Location:</span>
                  <span className="InfoText">Makassar, Indonesia</span>
                </div>
                <div className="InfoItem">
                  <span className="InfoLabel">Available:</span>
                  <span className="InfoText">Open for opportunities</span>
                </div>
              </div>

              <form className="ContactForm" onSubmit={handleSubmit}>
                <div className="FormGroup">
                  <label htmlFor="name" className="FormLabel">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="FormInput"
                    required
                  />
                </div>

                <div className="FormGroup">
                  <label htmlFor="email" className="FormLabel">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="FormInput"
                    required
                  />
                </div>

                <div className="FormGroup">
                  <label htmlFor="message" className="FormLabel">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="FormTextarea"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="SubmitButton"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
                {status.type && (
                  <div
                    className={`StatusMessage ${
                      status.type === "success" ? "StatusSuccess" : "StatusError"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            <div className="LogoLoopContainer">
              <LogoLoop
                logos={[
                    {src: "https://img.icons8.com/pulsar-line/48/C850F2/github.png", href: "github.com"},
                    {src: "https://img.icons8.com/ios-glyphs/30/C850F2/whatsapp.png", href: "https://wa.me/62895326458650"},
                    {src: "https://img.icons8.com/ios/50/C850F2/linkedin.png", href: "https://www.linkedin.com/in/razan-muhammad-dhirgham-aswani-5b3591290/"},
                    {src: "https://img.icons8.com/ios-glyphs/30/C850F2/instagram-new.png", href: "https://www.instagram.com/razannmd/"}
                ]}
                speed={80}
                direction="left"
                logoHeight={40}
                gap={32}
                pauseOnHover={true}
                className="ContactLogoLoop"
                fadeOut={false}
              />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}

export default Contact;
