import React from 'react';
import { CONTACT } from '../constants/index'; // Adjust the path as necessary

const ContactSection = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-slate-400 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <div className="space-y-4">
        <p className="text-white p-2 rounded-m p-2 rounded-md">
          <strong>Address:</strong> {CONTACT.address}
        </p>
        <p className="text-white p-2 rounded-mp-2 rounded-md">
          <strong>Phone:</strong> {CONTACT.phoneNo}
        </p>
        <p className="text-white p-2 rounded-md">
          <strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-blue-950 hover:underline">{CONTACT.email}</a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
