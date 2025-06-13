import React from 'react';
import Swal from 'sweetalert2';


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1bec1e31-f1d4-4099-ab61-5ee9087820e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message was sent successfully!",
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <section
      id='contact'
      className='w-full min-h-screen flex flex-col items-center justify-center bg-zinc-50 px-4'
    >
      {/* Header */}
      <div
        className='text-center mb-10'
        
      >
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">Contact Me</h2>
        <p className="text-gray-black">Get in touch with me</p>
      </div>

      {/* Form Container */}
      <div
        className="w-full md:w-[45%] border-2 border-slate-800 p-6 rounded-2xl shadow-lg bg-zinc-200"
        
      >
        <form className="space-y-6 " onSubmit={onSubmit}>
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="font-semibold text-black block mb-1">First Name</label>
              <input type="text" name="name" required className="w-full p-2 rounded bg-zinc-100 text-black" />
            </div>
            <div className="flex-1" >
              <label className="font-semibold text-black block mb-1">Last Name</label>
              <input type="text" name="lastName" required className="w-full p-2 rounded bg-zinc-100 text-black" />
            </div>
          </div>

          {/* Email */}
          <div >
            <label className="font-semibold text-black block mb-1">Email</label>
            <input type="email" name="email" required className="w-full p-2 rounded bg-zinc-100 text-black" />
          </div>

          {/* Message */}
          <div>
            <label className="font-semibold text-black block mb-1">Message</label>
            <textarea name="message" className="w-full p-2 rounded bg-zinc-100 text-black h-28 resize-none" />
          </div>

          {/* Button */}
          <div className="text-center" >
            <button
              type="submit"
              className="text-black border-2 border-slate-900 focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-6 py-2.5 transition-transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
