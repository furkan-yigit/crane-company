import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="mt-12">
      {/* SEO helmet */}
      <Helmet>
        <title>Vinc Firması | Güvenilir Vinç Kiralama</title>
        <meta
          name="description"
          content="15+ yıllık tecrübesiyle güçlü, güvenli ve zamanında vinç kiralama hizmetleri. Endüstriyel projeler için ideal çözümler."
        />
        <meta
          name="keywords"
          content="vinç kiralama, mobil vinç, kule vinç, inşaat vinci, endüstriyel vinç"
        />
        <meta name="author" content="Vinc Firması" />
      </Helmet>

      {/* Kahraman Alanı */}
      <section className="relative text-white py-20 px-4 text-center">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1724634731504-001259c8ab2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueSUyMGJ1aWxkfGVufDB8MHwwfHx8MA%3D%3D')",
          }} // Kendi görsel yolunu buraya yaz
        ></div>

        {/* İçerik */}
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Güçlü ve Güvenilir Vinç Kiralama Hizmeti
          </h1>
          <p className="text-lg mb-6">
            Endüstriyel projeleriniz için yüksek kapasiteli ve güvenli vinç
            çözümleri sunuyoruz.
          </p>
          <a
            href="/iletisim"
            className="bg-accent text-primary px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition"
          >
            Teklif Alın
          </a>
        </div>
      </section>

      {/* *******Hakkımızda************** */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hakkımızda Başlığı */}
          <h2 className="text-4xl font-bold text-primary mb-8">Hakkımızda</h2>

          {/* Hakkımızda Metni */}
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            20 yılı aşkın tecrübemizle vinç sektöründe güven ve kaliteyi bir
            araya getiriyoruz. Modern ekipmanlarımız ve uzman kadromuzla
            projelerinizi zamanında ve sorunsuz tamamlamayı hedefliyoruz.
            <br />
            <br />
            Müşteri memnuniyetini ön planda tutarak, her aşamada destek ve
            danışmanlık sağlıyoruz.
          </p>

          {/* Neden Bizi Tercih Etmelisiniz Başlığı */}
          <h3 className="text-3xl font-semibold text-primary mb-6">
            Neden Bizi Tercih Etmelisiniz?
          </h3>

          {/* Neden Bizi Tercih Etmelisiniz Maddeleri */}
          <ul className="inline-block text-left space-y-4 text-gray-700 text-lg max-w-md mx-auto mb-12">
            {[
              "20+ yıllık sektör deneyimi ve güvenilirlik.",
              "Güvenli ve modern vinç ekipmanları.",
              "Uzman operatör kadrosu ile hızlı ve güvenilir hizmet.",
              "Zamanında teslimat ve projeye özel çözümler.",
              "Müşteri memnuniyeti odaklı çalışma anlayışı.",
            ].map((item, i) => (
              <li key={i} className="flex items-center">
                <span className="inline-block w-5 h-5 mr-3 bg-accent rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Hizmetler Butonu */}
        <a
          href="/hizmetler"
          className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded hover:bg-yellow-400 transition"
        >
          Hizmetlerimizi İnceleyin
        </a>
      </section>

      <section className="relative text-white py-12 px-4 text-center">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRhY3QlMjB1c3xlbnwwfDB8MHx8fDA%3D')",
          }}
        ></div>

        {/* İçerik */}
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Projeleriniz için hemen bizimle iletişime geçin!
          </h2>
          <a
            href="/iletisim"
            className="bg-accent text-primary px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition"
          >
            Bize Ulaşın
          </a>
        </div>
      </section>
    </div>
  );
}
