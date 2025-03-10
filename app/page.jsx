import { CheckCircle, Star, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Home() {
  // Dati statici importati da Python
  const features = [];
  const testimonials = [{"quote": "Testimonianza cliente", "author": "Cliente", "company": "Azienda", "role": "Cliente"}];
  const pricing = [{"name": "Base", "price": "\u20ac9/mese", "description": "Perfetto per iniziare", "features": ["Feature 1", "Feature 2"], "cta": "Inizia gratis", "popular": false}, {"name": "Pro", "price": "\u20ac29/mese", "description": "Per team in crescita", "features": ["Tutto del piano Base", "Feature 3", "Feature 4"], "cta": "Prova gratis", "popular": true}, {"name": "Enterprise", "price": "Contattaci", "description": "Per grandi organizzazioni", "features": ["Tutto del piano Pro", "Feature 5", "Feature 6"], "cta": "Contattaci", "popular": false}];
  const title = "Landing Page";
  const hero_headline = "Inizia oggi stesso con saasfounder e trasforma la tua idea in realtà.",";
  const hero_subheadline = "La soluzione SaaS perfetta per le tue esigenze";
  const hero_cta_primary = "Inizia Ora";
  const hero_cta_secondary = "Scopri di più";
  const cta_headline = "Pronto a iniziare?";
  const cta_subheadline = "Unisciti a migliaia di utenti soddisfatti che usano Landing Page ogni giorno.";
  const cta_button = "Inizia ora";
  const footer_tagline = "Landing Page - La tua soluzione SaaS";
  const footer_company_info = "© Landing Page 2025. Tutti i diritti riservati.";

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            {title}
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:underline">
              Funzionalità
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:underline">
              Testimonianze
            </a>
            <a href="#pricing" className="text-sm font-medium hover:underline">
              Prezzi
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Accedi</Button>
            <Button>Registrati</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {hero_headline}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {hero_subheadline}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">{hero_cta_primary}</Button>
                <Button size="lg" variant="outline">{hero_cta_secondary}</Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Hero Image"
                width="550"
                height="450"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Funzionalità Principali
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Scopri cosa rende {title} la soluzione perfetta per le tue esigenze.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {features.map((feature) => (
              <div className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-blue-50 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cosa Dicono i Nostri Clienti
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Testimonianze di chi utilizza {title} ogni giorno.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {testimonials.map((testimonial) => (
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-sm text-gray-500">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Piani e Prezzi
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Scegli il piano più adatto alle tue esigenze.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {pricing.map((plan) => (
              <div className={`flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm ${plan.popular ? 'relative' : ''}`}>
                {plan.popular && <div className="absolute -top-3 right-6 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Popolare</div>}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>
                <p className="text-3xl font-bold">{plan.price}</p>
                <ul className="grid gap-2 py-4">
                  {plan.features.map((feature) => (
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{plan.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {cta_headline}
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {cta_subheadline}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                {cta_button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="text-lg font-medium">{footer_tagline}</p>
              <p className="text-sm text-gray-300">
                {footer_company_info}
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#" className="text-sm hover:underline">Termini di Servizio</a>
              <a href="#" className="text-sm hover:underline">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
