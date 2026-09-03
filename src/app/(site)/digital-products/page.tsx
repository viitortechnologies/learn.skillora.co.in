import { whatsappBuyLink } from "@/lib/format";

const products = [
  { title: "Resume + LinkedIn makeover kit", note: "Used in Skillora placement sprints", image: "/products/resume.webp" },
  { title: "AWS / Azure lab checklist", note: "Printable lab tracker for DevSecOps learners", image: "/products/cloud.webp" },
  { title: "Java DSA pattern cards", note: "Interview-ready problem patterns", image: "/products/dsa.webp" },
];

export default function DigitalProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Digital Products</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((p) => (
          <article key={p.title} className="card-surface overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="font-semibold mb-1">{p.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{p.note}</p>
              <a
                href={whatsappBuyLink(p.title)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center"
              >
                Buy Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
