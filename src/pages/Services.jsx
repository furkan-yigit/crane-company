import { Helmet } from "react-helmet-async";

export default function Services() {
  const hizmetler = [
    {
      baslik: "Mobil Vinç Kiralama",
      aciklama:
        "Ağır yüklerinizi taşımak için profesyonel mobil vinç hizmetimizle yanınızdayız.",
      image:
        "https://plus.unsplash.com/premium_photo-1678281888592-8ad623bb39e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwY3JhbmV8ZW58MHwyfDB8fHww",
    },
    {
      baslik: "Sepetli Platform Hizmeti",
      aciklama:
        "Yüksek yerlerde güvenli çalışma imkanı sunan sepetli vinç kiralama.",
      image:
        "https://images.unsplash.com/photo-1658490261406-5a82631e56f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwY3JhbmV8ZW58MHwyfDB8fHww",
    },
    {
      baslik: "Teleskopik Vinç Hizmeti",
      aciklama:
        "Yüksek kaldırma kapasitesine sahip teleskopik vinçler ile etkili çözümler.",
      image:
        "https://images.unsplash.com/photo-1629025191802-e3c41b371639?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vYmlsZSUyMGNyYW5lfGVufDB8MnwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Vinc Firması | Hizmetlerimiz</title>
        <meta
          name="description"
          content="Mobil vinç, kule vinç, ağır kaldırma ve diğer vinç kiralama hizmetlerimizle projelerinizi destekliyoruz."
        />
        <meta
          name="keywords"
          content="vinç hizmetleri, mobil vinç kiralama, kule vinç kiralama, ağır kaldırma"
        />
        <meta name="author" content="Vinc Firması" />
      </Helmet>

      {/* HERO */}
      <div
        className="relative w-full h-40 md:h-60 bg-cover bg-center mt-10"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1721460167399-3fc0f325156f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JhbmUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Hizmetlerimiz
          </h1>
        </div>
      </div>

      {/* KARTLAR */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hizmetler.map((hizmet, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <img
                src={hizmet.image}
                alt={hizmet.baslik}
                className="h-80 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {hizmet.baslik}
                </h3>
                <p className="text-gray-600">{hizmet.aciklama}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
