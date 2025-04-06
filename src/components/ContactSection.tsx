import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const ContactSection = () => {
  const [state, handleSubmit] = useForm('xjkypgbp');
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <section id="contact" className="py-20 bg-spring-soft">
      <div className="container-section">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-gray-600 mb-8">
              I'm currently looking for new frontend/full-stack opportunities.
              Whether you have a question or just want to say hello, I'll get
              back to you as soon as possible!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm mr-4">
                  <Mail className="w-5 h-5 text-spring-mint" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Email</h4>
                  <a
                    href="mailto:eka.melnichuk@gmail.com"
                    className="text-lg hover:text-spring-lavender transition-colors"
                  >
                    eka.melnichuk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm mr-4">
                  <Phone className="w-5 h-5 text-spring-mint" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Phone</h4>
                  <a
                    href="tel:+420775992148"
                    className="text-lg hover:text-spring-lavender transition-colors"
                  >
                    +420 775 992 148
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm mr-4">
                  <MapPin className="w-5 h-5 text-spring-mint" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">Location</h4>
                  <p className="text-lg">Prague, Czech Republic</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/ekatamel"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-spring-lavender hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/ekaterinamelnichuk"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-spring-lavender hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            {state.succeeded && (
              <p className="mt-4 text-green-500 text-center">
                Thank you! Your message has been sent.
              </p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-lavender focus:border-transparent"
                  placeholder="Your name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-lavender focus:border-transparent"
                  placeholder="Your email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-lavender focus:border-transparent"
                  placeholder="Your message"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
