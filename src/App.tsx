import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Menu, X, Phone, MapPin, Instagram, 
  Scissors, Sparkles, Crown, Palette, Heart, ArrowRight,
  ChevronRight, Star, Quote
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const portfolioCategories = [
    { id: 'all', label: 'All Works' },
    { id: 'bridal', label: 'Bridal Wears' },
    { id: 'asoebi', label: 'Asoebi' },
    { id: 'custom', label: 'Custom Made' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'hair', label: 'Hair Styling' },
  ]

  const portfolioImages = [
    { id: 1, src: '/images/Bridal.jpeg', category: 'bridal', title: 'Bridal Elegance I' },
    { id: 2, src: '/images/Bridal1.jpeg', category: 'bridal', title: 'Bridal Elegance II' },
    { id: 3, src: '/images/Bridal1i.jpeg', category: 'bridal', title: 'Bridal Elegance III' },
    { id: 4, src: '/images/Bridal1ii.jpeg', category: 'bridal', title: 'Bridal Elegance IV' },
    { id: 5, src: '/images/Bridal3.jpeg', category: 'bridal', title: 'Bridal Elegance V' },
    { id: 6, src: '/images/Bridal4.jpeg', category: 'bridal', title: 'Bridal Elegance VI' },
    { id: 7, src: '/images/Bridal5.jpeg', category: 'bridal', title: 'Bridal Elegance VII' },
    { id: 8, src: '/images/Aso.jpeg', category: 'asoebi', title: 'Asoebi Style I' },
    { id: 9, src: '/images/Aso1.jpeg', category: 'asoebi', title: 'Asoebi Style II' },
    { id: 10, src: '/images/Aso2.jpeg', category: 'asoebi', title: 'Asoebi Style III' },
    { id: 11, src: '/images/Aso3.jpeg', category: 'asoebi', title: 'Asoebi Style IV' },
    { id: 12, src: '/images/Aso4.jpeg', category: 'asoebi', title: 'Asoebi Style V' },
    { id: 13, src: '/images/Aso5.jpeg', category: 'asoebi', title: 'Asoebi Style VI' },
    { id: 14, src: '/images/Aso6.jpeg', category: 'asoebi', title: 'Asoebi Style VII' },
    { id: 15, src: '/images/Aso7.jpeg', category: 'asoebi', title: 'Asoebi Style VIII' },
    { id: 16, src: '/images/Cus%20(1).jpeg', category: 'custom', title: 'Custom Made I' },
    { id: 17, src: '/images/Cus%20(2).jpeg', category: 'custom', title: 'Custom Made II' },
    { id: 18, src: '/images/Cus%20(3).jpeg', category: 'custom', title: 'Custom Made III' },
    { id: 19, src: '/images/Cus%20(4).jpeg', category: 'custom', title: 'Custom Made IV' },
    { id: 20, src: '/images/Cus%20(5).jpeg', category: 'custom', title: 'Custom Made V' },
    { id: 21, src: '/images/Cus%20(6).jpeg', category: 'custom', title: 'Custom Made VI' },
    { id: 22, src: '/images/Cus%20(7).jpeg', category: 'custom', title: 'Custom Made VII' },
    { id: 23, src: '/images/Cus%20(8).jpeg', category: 'custom', title: 'Custom Made VIII' },
    { id: 24, src: '/images/mak.jpeg', category: 'makeup', title: 'Makeup Look I' },
    { id: 25, src: '/images/mak1.jpeg', category: 'makeup', title: 'Makeup Look II' },
    { id: 26, src: '/images/mak2.jpeg', category: 'makeup', title: 'Makeup Look III' },
    { id: 27, src: '/images/makeup-3.jpg', category: 'makeup', title: 'Makeup Look IV' },
    { id: 28, src: '/images/Hair.jpeg', category: 'hair', title: 'Hair Styling I' },
    { id: 29, src: '/images/Hair1.jpeg', category: 'hair', title: 'Hair Styling II' },
    { id: 30, src: '/images/Hair2.jpeg', category: 'hair', title: 'Hair Styling III' },
    { id: 31, src: '/images/Hair3.jpeg', category: 'hair', title: 'Hair Styling IV' },
    { id: 32, src: '/images/Hair4.jpeg', category: 'hair', title: 'Hair Styling V' },
    { id: 33, src: '/images/Hair5.jpeg', category: 'hair', title: 'Hair Styling VI' },
    { id: 34, src: '/images/Hair6.jpeg', category: 'hair', title: 'Hair Styling VII' },
  ]

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
      })

      gsap.from('.hero-image', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5
      })

      // Scroll animations
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out'
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: 'power3.out'
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: 50,
          duration: 0.8,
          ease: 'power3.out'
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-scale').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power3.out'
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="section-padding py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection(heroRef)} className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Gbayiima" className="h-12 w-auto" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection(heroRef)} className="text-sm font-medium hover:text-brand-blue transition-colors">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-sm font-medium hover:text-brand-blue transition-colors">About</button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-sm font-medium hover:text-brand-blue transition-colors">Services</button>
              <button onClick={() => scrollToSection(portfolioRef)} className="text-sm font-medium hover:text-brand-blue transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection(contactRef)} className="btn-primary text-sm py-2 px-6">Contact Us</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="section-padding py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection(heroRef)} className="text-left py-2 font-medium">Home</button>
              <button onClick={() => scrollToSection(aboutRef)} className="text-left py-2 font-medium">About</button>
              <button onClick={() => scrollToSection(servicesRef)} className="text-left py-2 font-medium">Services</button>
              <button onClick={() => scrollToSection(portfolioRef)} className="text-left py-2 font-medium">Portfolio</button>
              <button onClick={() => scrollToSection(contactRef)} className="text-left py-2 font-medium text-brand-blue">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        
        <div className="section-padding w-full py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="hero-content space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-brand-pink font-medium tracking-wider uppercase text-sm">Welcome to {'Gbaj\u00fam\u00f2 Fashion House'}</p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  For Everything{' '}
                  <span className="text-gradient">Fashion...</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
                  Bespoke Tailoring, Bridal Elegance, and Timeless Style. 
                  We bring your fashion dreams to life with exquisite craftsmanship 
                  and attention to detail.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => scrollToSection(servicesRef)} className="btn-primary flex items-center justify-center gap-2">
                  Explore Our Services
                  <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollToSection(portfolioRef)} className="px-8 py-4 rounded-full border-2 border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-brand-blue">500+</p>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-brand-pink">10+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-brand-blue">1000+</p>
                  <p className="text-sm text-gray-500">Designs Created</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image relative">
              <div className="relative animate-pulse-soft">
                <img 
                  src="/images/logo.png" 
                  alt="Gbayiima Fashion" 
                  className="w-full max-w-lg mx-auto"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-brand-pink text-white p-3 rounded-full shadow-lg animate-float">
                  <Sparkles size={20} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-brand-blue text-white p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <Heart size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-brand-gray relative">
        <div className="section-padding">
          {/* About Brand */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="reveal-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full">
                <Crown size={16} className="text-brand-blue" />
                <span className="text-sm font-medium text-brand-blue">About The Brand</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                Crafting Elegance, <br />
                <span className="text-gradient">One Stitch at a Time</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  {'Gbaj\u00fam\u00f2 Fashion House'} is a full-service fashion and bridal solutions brand 
                  dedicated to delivering elegance, precision, and convenience. We specialize 
                  in bespoke dressmaking, ready-to-wear collections, and complete wardrobe 
                  logistics, while also offering Aso-ebi and Aso-oke sourcing.
                </p>
                <p>
                  Beyond fashion, we provide comprehensive bridal and event support, including 
                  bridal hair styling, professional makeup, bride assistance, and event 
                  coordination, ensuring every client experiences a seamless and beautifully 
                  curated journey.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <Star size={18} className="text-brand-pink" />
                  </div>
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Sparkles size={18} className="text-brand-blue" />
                  </div>
                  <span className="text-sm font-medium">Unique Designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <Heart size={18} className="text-brand-pink" />
                  </div>
                  <span className="text-sm font-medium">Made with Love</span>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <div className="relative">
                <img 
                  src="/images/Gbajumo2.jpeg" 
                  alt="Gbayiima Fashion Design" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <p className="font-display text-4xl font-bold text-brand-blue">10+</p>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Individual */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/images/Gbajumo1.jpeg" 
                  alt="Founder" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -top-6 -right-6 bg-brand-pink text-white p-4 rounded-xl shadow-xl">
                  <Quote size={32} />
                </div>
              </div>
            </div>
            <div className="reveal-right space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-brand-pink/10 px-4 py-2 rounded-full">
                <Sparkles size={16} className="text-brand-pink" />
                <span className="text-sm font-medium text-brand-pink">Meet The Designer</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
                Passion Meets <br />
                <span className="text-gradient">Purpose</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Joseph Adebimpe Elizabeth is a Serial Entrepreneur A mathematician by 
                  certificate, a wife, a mom, and a fashion enthusiast.
                </p>
                <p>
                  With a strong eye for detail and a commitment to excellence, she has grown 
                  {'Gbaj\u00fam\u00f2'} into a full-service fashion and bridal solutions brand, offering 
                  bespoke designs, wardrobe logistics, and complete bridal support services.
                </p>
                <p>
                  Her approach goes beyond creating beautiful garments; she is dedicated to 
                  delivering seamless experiences for her clients, ensuring every outfit, 
                  event, and moment is thoughtfully curated.
                </p>
                <p>
                  Driven by creativity and a desire to make every client feel confident and 
                  exceptional, Adebimpe continues to redefine fashion service delivery with 
                  professionalism and style.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-display text-xl font-semibold">- Joseph Adebimpe Elizabeth</p>
                <p className="text-sm text-gray-500">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-white to-brand-pink/5" />
        
        <div className="section-padding relative">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-4">
              <Scissors size={16} className="text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue">Our Services</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-gray-600">
              From bespoke tailoring to complete bridal packages, we provide comprehensive 
              fashion and beauty services to make your special moments unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Fashion Services */}
            <div className="reveal-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Scissors size={28} className="text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Fashion Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-pink mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Bespoke dressmaking tailored to your unique style</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-pink mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Ready-to-wear collections for every occasion</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-pink mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Custom styling & wardrobe planning</span>
                </li>
              </ul>
            </div>

            {/* Fabric & Sourcing */}
            <div className="reveal-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
                <Palette size={28} className="text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Fabric & Sourcing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Aso-ebi sourcing for group celebrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Aso-oke sourcing for traditional events</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Expert fabric consultation</span>
                </li>
              </ul>
            </div>

            {/* Bridal Services */}
            <div className="reveal-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Crown size={28} className="text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Bridal Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-pink mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Bridal hair styling for your big day</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-pink mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Professional makeup artistry</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-pink mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Bride assistance (on-the-day support)</span>
                </li>
              </ul>
            </div>

            {/* Event & Lifestyle */}
            <div className="reveal-up bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-colors">
                <Sparkles size={28} className="text-brand-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Event & Lifestyle</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Event coordination & planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Wardrobe logistics & styling support</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Personal shopping assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 bg-brand-gray">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-up">
            <div className="inline-flex items-center gap-2 bg-brand-pink/10 px-4 py-2 rounded-full mb-4">
              <Heart size={16} className="text-brand-pink" />
              <span className="text-sm font-medium text-brand-pink">Our Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Works</span>
            </h2>
            <p className="text-gray-600">
              Explore our collection of bespoke designs, bridal creations, and stunning transformations.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-up">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-blue text-white shadow-brand'
                    : 'bg-white text-gray-600 hover:bg-brand-blue/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="reveal-scale group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{image.title}</p>
                    <p className="text-white/80 text-xs capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-pink/5" />
        <div className="section-padding relative">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-up">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-4">
              <Quote size={16} className="text-brand-blue" />
              <span className="text-sm font-medium text-brand-blue">Testimonials</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Adaeze M.',
                role: 'Bride',
                text: 'Gbajumo made my wedding day unforgettable. The attention to detail in my dress was incredible!',
                rating: 5
              },
              {
                name: 'Chioma O.',
                role: 'Event Planner',
                text: 'The aso-ebi coordination was flawless. Every guest looked stunning in their outfits.',
                rating: 5
              },
              {
                name: 'Ngozi K.',
                role: 'Fashion Enthusiast',
                text: 'I have been a loyal customer for years. The quality and creativity never disappoint.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="reveal-up bg-white rounded-2xl p-8 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-brand-gray">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal-left space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-pink/10 px-4 py-2 rounded-full mb-4">
                  <Phone size={16} className="text-brand-pink" />
                  <span className="text-sm font-medium text-brand-pink">Get In Touch</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                  Let Us Bring Your <br />
                  <span className="text-gradient">Vision to Life</span>
                </h2>
                <p className="text-gray-600">
                  Ready to create something beautiful? Contact us today to discuss your 
                  fashion needs and let us help you make a statement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Phone size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+234 706 973 2071</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <MapPin size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.instagram.com/gbajumooo?igsh=MTN2dTYzM2VzaWVjNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-blue/80 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://www.tiktok.com/@gbajumooo?_r=1&_t=ZS-95bqAeL5ZWD" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-pink text-white flex items-center justify-center hover:bg-brand-pink/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                </a>
                <a href="https://wa.me/2347069732071" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-blue/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal-right">
              <form className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all">
                    <option>Select a service</option>
                    <option>Bespoke Dressmaking</option>
                    <option>Bridal Services</option>
                    <option>Aso-ebi Sourcing</option>
                    <option>Makeup & Hair</option>
                    <option>Event Coordination</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  />
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12">
        <div className="section-padding">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <img src="/images/logo.png" alt="Gbayiima" className="h-16 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400 max-w-sm">
                For Everything Fashion. We bring your fashion dreams to life with 
                exquisite craftsmanship and attention to detail.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection(heroRef)} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection(portfolioRef)} className="hover:text-white transition-colors">Portfolio</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Bespoke Dressmaking</li>
                <li>Bridal Services</li>
                <li>Aso-ebi Sourcing</li>
                <li>Makeup & Hair</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 {'Gbaj\u00fam\u00f2 Fashion House'}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gbajumooo?igsh=MTN2dTYzM2VzaWVjNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@gbajumooo?_r=1&_t=ZS-95bqAeL5ZWD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
              <a href="https://wa.me/2347069732071" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
