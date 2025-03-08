import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, Twitter, Github, Linkedin, BarChart, Clock, Users, Zap, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold">saasfounder - Crea Software as a Service senza stress</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:underline">
              Sign In
            </Link>
            <Link href="#" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Provalo ora
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Crea Software as a Service senza sforzo
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    saasfounder gestisce tutto, dalla configurazione alla distribuzione. Concentrati sul tuo prodotto, non sulle complicazioni tecniche.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="#" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Provalo ora <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Scopri di più
                  </a>
                </div>
                <p className="text-xs text-gray-500">
                  No credit card required. Start your 14-day free trial today.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Dashboard Preview"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features that set us apart</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Powerful tools designed to help your team work more efficiently and effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <cog className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Configurazione automatica</h3>
                      <p className="text-gray-500">
                        Dimentica la complessità della configurazione. Noi gestiamo tutto per te.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <code className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Sviluppo facilitato</h3>
                      <p className="text-gray-500">
                        Con saasfounder, il processo di sviluppo diventa semplice e veloce.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <rocket className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Deploy istantaneo</h3>
                      <p className="text-gray-500">
                        Con un click, il tuo SaaS è online e pronto per l'uso.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <support className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold">Supporto completo</h3>
                      <p className="text-gray-500">
                        Il nostro team è qui per aiutarti in ogni fase del tuo progetto.
                      </p>
                    </div>
                  </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by thousands of teams</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              
                  <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/placeholder.svg"
                          alt="Maria Rossi"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-base font-medium">Maria Rossi</p>
                          <p className="text-sm text-gray-500">CEO, Tech Company S.p.A.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-500">
                          "saasfounder ha rivoluzionato il nostro approccio allo sviluppo di SaaS."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/placeholder.svg"
                          alt="Luca Verdi"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-base font-medium">Luca Verdi</p>
                          <p className="text-sm text-gray-500">CTO, Startup Innovativa S.r.l.</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-500">
                          "Grazie a saasfounder, abbiamo lanciato il nostro SaaS in tempi record."
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/placeholder.svg"
                          alt="Giulia Bianchi"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-base font-medium">Giulia Bianchi</p>
                          <p className="text-sm text-gray-500">Founder, Digital Agency XYZ</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-500">
                          "saasfounder ci ha permesso di concentrarci sul nostro prodotto, senza distrazioni tecniche."
                        </p>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, transparent pricing</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              
                  <div className="rounded-lg border border-gray-200 bg-white shadow-sm relative">
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">Base</h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$49</span>
                        <span className="text-gray-500">/month per user</span>
                      </div>
                      <p className="mt-2 text-gray-500">Per iniziare a creare il tuo primo SaaS</p>
                      
                      <ul className="mt-6 space-y-3">
                        
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Configurazione automatica</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Supporto email</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Deploy istantaneo</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6">
                        <a href="#" className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                          Scegli Base
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-blue-600 bg-white shadow-sm relative">
                    
                      <div className="absolute right-4 top-4">
                        <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white rounded-full">
                          Popular
                        </span>
                      </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">Pro</h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$99</span>
                        <span className="text-gray-500">/month per user</span>
                      </div>
                      <p className="mt-2 text-gray-500">Per sviluppatori e team che vogliono crescere</p>
                      
                      <ul className="mt-6 space-y-3">
                        
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Tutte le funzionalità di Base</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Supporto telefonico</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Personalizzazione avanzata</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6">
                        <a href="#" className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                          Scegli Pro
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white shadow-sm relative">
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">Enterprise</h3>
                      <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$199</span>
                        <span className="text-gray-500">/month per user</span>
                      </div>
                      <p className="mt-2 text-gray-500">Per aziende con esigenze su larga scala</p>
                      
                      <ul className="mt-6 space-y-3">
                        
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Tutte le funzionalità di Pro</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>SLA garantito</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span>Personalizzazione completa</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6">
                        <a href="#" className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700">
                          Scegli Enterprise
                        </a>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Pronto per iniziare?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Unisciti a migliaia di sviluppatori e aziende che usano saasfounder per semplificare la creazione di SaaS.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100">
                  Provalo ora <ArrowRight className="ml-1 h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                  Schedule a demo
                </a>
              </div>
              <p className="text-sm">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-white">
        <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold">saasfounder - Crea Software as a Service senza stress</span>
            </Link>
            <p className="text-gray-500">
              saasfounder - La soluzione definitiva per la creazione di Software as a Service
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:px-6 lg:flex-row">
            <p className="text-center text-sm text-gray-500 lg:text-left">
              © {new Date().getFullYear()} saasfounder - Crea Software as a Service senza stress. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}