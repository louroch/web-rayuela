import { HeroSection } from "@/components/ui/hero-section";
import { Features } from "@/components/ui/features";
import { Clients } from "@/components/ui/clients";
import { ContactForm } from "@/components/ui/contact-form";

export default async function Home() {
  const res = await fetch("https://api.ejemplo.com/data", { next: { revalidate: 60 } });
  const json = await res.json();

  return (
    <main className="flex-grow">
      <HeroSection />
      <Features />
      <Clients />
      <ContactForm />
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </main>
  );
}
