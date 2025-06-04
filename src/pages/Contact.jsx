import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verisi:", form);
    alert("Mesajınız gönderildi!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl space-y-16">
      <Helmet>
        <title>Vinc Firması | İletişim</title>
        <meta
          name="description"
          content="Vinc Firması ile iletişime geçin, sorularınızı sorun veya vinç kiralama talepleriniz için bize ulaşın."
        />
        <meta
          name="keywords"
          content="vinç kiralama iletişim, vinç kiralama teklif, vinç firması telefon, vinç kiralama adres"
        />
        <meta name="author" content="Vinc Firması" />
      </Helmet>

      {/* İletişim Bilgileri */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          İletişim Bilgilerimiz
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaPhone className="text-blue-600 text-3xl mx-auto mb-2" />
            <p className="font-semibold">+90 555 123 45 67</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaEnvelope className="text-blue-600 text-3xl mx-auto mb-2" />
            <p className="font-semibold">info@vincfirmasi.com</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto mb-2" />
            <p className="font-semibold">
              Örnek Mah. Vinç Sok. No:10, İstanbul
            </p>
          </div>
        </div>
      </section>

      {/* Google Harita */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Konumumuz</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d782.7011266106063!2d26.962919668593024!3d38.7539845809014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svinc!5e1!3m2!1str!2str!4v1749024778079!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vinc Firması Konumu"
          />
        </div>
      </section>

      {/* İletişim Formu */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Bize Ulaşın</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-xl mx-auto text-left"
        >
          {/* Ad */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Adınız"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* E-posta */}
          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="E-posta adresiniz"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 pl-10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          {/* Mesaj */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              placeholder="Mesajınız"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            />
          </div>
          {/* Gönder Butonu */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaPaperPlane /> Gönder
          </button>
        </form>
      </section>
    </div>
  );
}
