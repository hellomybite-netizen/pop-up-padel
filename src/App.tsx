import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Instagram, 
  ArrowRight,
  Menu,
  X,
  Zap,
  Users,
  Shield,
  Trophy,
  Calendar,
  MapPin,
  CircleDot
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Navbar onBookClick={openBooking} />
      <Hero onBookClick={openBooking} />
      <About />
      <WhyUs />
      <Experience />
      <Community />
      <Events />
      <Gallery />
      <CTA onBookClick={openBooking} />
      <Footer />
      
      {isBookingOpen && <BookingModal onClose={closeBooking} />}
    </div>
  );
}

function Navbar({ onBookClick }: { onBookClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center">
            <CircleDot className="text-white w-5 h-5" />
          </div>
          <img src="./logo.png" alt="Logo Pop Up Padel" className="h-24 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
          <a href="#about" className="hover:text-primary-gradient transition-all">About</a>
          <a href="#why-us" className="hover:text-primary-gradient transition-all">Why Us</a>
          <a href="#experience" className="hover:text-primary-gradient transition-all">Experience</a>
          <a href="#community" className="hover:text-primary-gradient transition-all">Community</a>
          <a href="#events" className="hover:text-primary-gradient transition-all">Events</a>
        </div>

        <div className="hidden md:block">
          <button 
            onClick={onBookClick}
            className="px-6 py-2 bg-primary-gradient text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:shadow-lg hover:scale-105 transition-all"
          >
            Book Now
          </button>
        </div>

        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <a href="#about" className="text-3xl font-black uppercase italic" onClick={() => setIsOpen(false)}>About</a>
          <a href="#why-us" className="text-3xl font-black uppercase italic" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="#experience" className="text-3xl font-black uppercase italic" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#community" className="text-3xl font-black uppercase italic" onClick={() => setIsOpen(false)}>Community</a>
          <a href="#events" className="text-3xl font-black uppercase italic" onClick={() => setIsOpen(false)}>Events</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              onBookClick();
            }}
            className="mt-4 px-10 py-4 bg-primary-gradient text-white font-bold rounded-full uppercase tracking-widest"
          >
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}

function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-accent/20 text-black text-[10px] font-bold uppercase tracking-[0.3em] mb-6 rounded-full border border-brand-accent/30">
            Welcome to the future of play
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 italic uppercase">
            THE NEW WAVE OF <br />
            <span className="text-primary-gradient">PADEL CULTURE.</span>
          </h1>
          <p className="text-gray-500 max-w-lg text-lg mb-10 font-medium leading-relaxed">
            Experience Indonesia's most exclusive pop-up padel circuit. Designed for the bold, built for the community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onBookClick}
              className="px-10 py-4 bg-primary-gradient text-white text-xs font-bold uppercase tracking-widest rounded-full hover:shadow-[0_10px_30px_rgba(74,0,224,0.3)] hover:-translate-y-1 transition-all"
            >
              Book A Session
            </button>
            <button className="px-10 py-4 border-2 border-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all group flex items-center gap-2">
              Explore More <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary-gradient blur-3xl opacity-10 rounded-full animate-pulse" />
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop" 
              alt="Padel Action" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center animate-bounce duration-[3000ms]">
            <span className="text-4xl font-black italic italic">24/7</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Booking</span>
          </div>
          <div className="absolute -bottom-10 -left-6 bg-brand-accent p-6 rounded-3xl shadow-xl flex items-center gap-4">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Trophy className="text-white" size={20} />
            </div>
            <div>
              <p className="font-black text-sm uppercase italic">Pro Level</p>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-black">Facilities</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.4em] opacity-40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black to-transparent" />
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-primary-gradient font-black text-sm uppercase tracking-[0.4em] mb-6 block">Our Vision</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-12 leading-tight">
            NOT JUST A SPORT. <br />
            <span className="text-gray-300">A LIFESTYLE MOVEMENT.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 text-left items-center pt-8">
            <div className="space-y-6">
              <p className="text-2xl font-light leading-relaxed">
                Pop Up Padel Indonesia is a mobile-first padel institution dedicated to transforming iconic urban spaces into high-performance athletic hubs.
              </p>
              <div className="h-1 w-20 bg-primary-gradient" />
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">
              We bring world-class padel infrastructure where players can connect, compete, and grow. From high-tech panoramic courts to premium lounge areas, we curate every detail to ensure an elite experience for every player, regardless of skill level.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyUs() {
  const cards = [
    {
      icon: Zap,
      title: "Fast-Paced Action",
      desc: "Padel is the fastest-growing social sport. Dynamic moves, quick rallies, and maximum fun."
    },
    {
      icon: Shield,
      title: "Premium Tech",
      desc: "Our courts feature Italian-made turf and panoramic glass for professional-grade play."
    },
    {
      icon: Users,
      title: "Elite Community",
      desc: "Join a curated network of athletes, creators, and professionals sharing the same drive."
    },
    {
      icon: Trophy,
      title: "Expert Coaching",
      desc: "Learn from WPT-certified coaches who will take your game from amateur to advanced."
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">Advantages</span>
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">WHY POP UP PADEL?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] hover:shadow-2xl transition-all group hover:-translate-y-2 border border-transparent hover:border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-gradient group-hover:text-white transition-colors duration-500">
                <card.icon size={28} />
              </div>
              <h3 className="text-xl font-black uppercase italic mb-4">{card.title}</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-gradient opacity-5 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-gradient mb-4 block">Facilities</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
                WORLD-CLASS <br /> INFRASTRUCTURE.
              </h2>
              <div className="space-y-8 mt-12">
                {[
                  { title: "Panoramic Master Courts", desc: "Full view glass walls with professional-grade lighting." },
                  { title: "Mondo Supercourt Turf", desc: "The same surface used on the World Padel Tour." },
                  { title: "Performance Recovery Hub", desc: "Ice baths, sports massage, and hydration lounge." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 border-b border-gray-100 pb-8 hover:translate-x-2 transition-transform cursor-default">
                    <span className="text-4xl font-black text-gray-100 font-display italic">0{idx + 1}</span>
                    <div>
                      <h4 className="text-xl font-black uppercase italic mb-2">{item.title}</h4>
                      <p className="text-gray-400 font-medium text-sm uppercase tracking-wide">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-brand-accent flex items-center justify-center p-8 text-center">
                <p className="text-black font-black uppercase italic text-2xl leading-none tracking-tighter italic">BEST IN <br /> INDONESIA</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-black flex items-center justify-center">
                <CircleDot size={80} className="text-white animate-pulse" />
              </div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                 <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="py-32 bg-primary-gradient text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent mb-6 block">Join The Tribe</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8 italic">
            YOU ARE ONE <br /> <span className="text-black">OF US.</span>
          </h2>
          <p className="text-white/70 text-xl font-light italic leading-relaxed">
            "We don't just play padel. We celebrate the hustle, the wins, and the lifestyle that comes with it."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <p className="text-4xl font-black mb-2 italic italic">450+</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Active Members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <p className="text-4xl font-black mb-2 italic italic">12K</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Followers</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-white p-2 rounded-full shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop" 
                alt="Community Member" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute -right-4 top-1/4 bg-brand-accent text-black p-4 rounded-2xl shadow-lg border-2 border-white rotate-12">
                 <p className="text-xs font-black uppercase tracking-widest leading-none tracking-tighter italic">VIBE CHECK</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <button className="w-full py-6 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-brand-accent transition-all group flex items-center justify-center gap-3 italic">
              Join Discord Circle <ArrowRight className="group-hover:translate-x-1" size={18} />
            </button>
            <button className="w-full py-6 border-2 border-white/30 text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all italic italic">
              Follow Our Pulse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    {
      date: "May 15",
      title: "SCBD PARK OPEN",
      category: "Tournament",
      status: "Registration Open"
    },
    {
      date: "June 02",
      title: "SUNSET PADEL MIXER",
      category: "Social Event",
      status: "Limited Slots"
    },
    {
      date: "June 20",
      title: "CANGGU MASTERS",
      category: "Championship",
      status: "Upcoming"
    }
  ];

  return (
    <section id="events" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">Calendar</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">UPCOMING EVENTS</h2>
          </div>
          <button className="text-[11px] font-black uppercase tracking-widest border-b-2 border-brand-accent pb-1 inline-flex items-center gap-2 italic">
            View All Events <ChevronRight size={14} />
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid md:grid-cols-4 items-center p-10 rounded-[2.5rem] bg-gray-50 hover:bg-white hover:shadow-2xl transition-all cursor-pointer border border-transparent hover:border-gray-100"
            >
              <div className="text-2xl font-black uppercase italic text-primary-gradient mb-4 md:mb-0">
                {event.date}
              </div>
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block italic">{event.category}</span>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">{event.title}</h3>
              </div>
              <div className="flex md:justify-end items-center gap-4 mt-6 md:mt-0">
                <span className="text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full border border-gray-200 group-hover:border-primary-gradient group-hover:text-primary-gradient transition-all">
                  {event.status}
                </span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-100 group-hover:bg-primary-gradient group-hover:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1594470117722-143893d707c6?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1530549387631-fef10cb463b7?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="flex animate-scroll gap-4 w-fit hover:[animation-play-state:paused]">
        {[...images, ...images].map((img, idx) => (
          <div key={idx} className="w-[400px] h-[500px] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shrink-0 shadow-xl border-8 border-white">
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

function CTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-gradient opacity-10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.8] mb-12 italic">
          BORN TO <br /> <span className="text-primary-gradient">PLAY.</span>
        </h2>
        <p className="text-gray-400 text-xl font-medium mb-16 max-w-2xl mx-auto uppercase tracking-wide italic">
          READY TO ELEVATE YOUR GAME AT THE FINEST PADEL HUB IN INDONESIA?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={onBookClick}
            className="px-16 py-6 bg-primary-gradient text-white font-black uppercase tracking-widest rounded-full hover:shadow-2xl hover:scale-105 transition-all text-sm italic"
          >
            BOOK A COURT NOW
          </button>
          <button className="px-16 py-6 border-2 border-black text-black font-black uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all text-sm italic">
            VIEW SCHEDULE
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white pt-32 pb-12 px-6 overflow-hidden relative">
      {/* Huge background text */}
      <div className="absolute -bottom-10 right-0 p-8 opacity-5 select-none pointer-events-none hidden xl:block">
        <div className="text-[280px] font-black leading-none italic uppercase -rotate-6">PADEL</div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="grid md:grid-cols-4 gap-16 w-full mb-32">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-10">
             <img src="./logo.png" alt="Logo Pop Up Padel" className="h-20 w-auto" />
                </div>
                <span className="font-black text-xl tracking-tighter uppercase italic">
                  POP UP PADEL<span className="text-brand-accent">.ID</span>
                </span>
              </div>
              <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs uppercase tracking-wide">
                Indonesia's premier padel institution. Transforming urban landscapes through passion and movement.
              </p>
          </div>
          
          <div className="space-y-8">
            <h5 className="font-black italic uppercase text-brand-accent text-xs tracking-widest">Navigation</h5>
            <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-white/50">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-black italic uppercase text-brand-accent text-xs tracking-widest">Locations</h5>
            <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-white/50">
              <li>Jakarta - SCBD</li>
              <li>Jakarta - Senopati</li>
              <li>Bali - Canggu</li>
              <li>Surabaya - Main</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="font-black italic uppercase text-brand-accent text-xs tracking-widest">Connect</h5>
            <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-white/50">
              <li>hello@popuppadel.id</li>
              <li>+62 812 3456 7890</li>
              <li className="flex items-center gap-4 pt-4">
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <ArrowRight size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
          <p>&copy; 2026 POP UP PADEL INDONESIA. ESTABLISHED TO ELEVATE.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    court: '',
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:scale-110 transition-transform"
      >
        <X size={32} />
      </button>

      <motion.div
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        className="bg-white w-full max-w-xl rounded-[3rem] overflow-hidden shadow-2xl relative"
      >
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-10 md:p-16">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary-gradient mb-4 block">Reservation</span>
            <h2 className="text-4xl font-black uppercase italic mb-10 tracking-tighter">SECURE YOUR <br />SESSION.</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-gradient outline-none transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Time</label>
                  <select 
                    required
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-gradient outline-none transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="">Select Time</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                    <option value="20:00">08:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Court Selection</label>
                <select 
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-gradient outline-none transition-all"
                  value={formData.court}
                  onChange={(e) => setFormData({ ...formData, court: e.target.value })}
                >
                  <option value="">Select Court</option>
                  <option value="Padel Court 1">Panoramic Court 1</option>
                  <option value="Padel Court 2">Panoramic Court 2</option>
                  <option value="Padel Court 3">Signature Center Court</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-gradient outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+62 ..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-gradient outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-primary-gradient text-white font-black uppercase tracking-widest rounded-full hover:shadow-2xl transition-all mt-4"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        ) : (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand-accent/20">
              <Trophy className="text-black" size={32} />
            </div>
            <h2 className="text-4xl font-black uppercase italic mb-4 tracking-tighter">YOU'RE IN!</h2>
            <p className="text-gray-400 font-medium mb-10 leading-relaxed uppercase tracking-widest text-xs">
              Your session for <span className="text-black font-black italic">{formData.court}</span> is reserved. <br />
              We've sent a confirmation to <span className="text-black font-black italic">{formData.phone}</span>.
            </p>
            <button 
              onClick={onClose}
              className="px-12 py-5 bg-black text-white font-black uppercase tracking-widest rounded-full hover:bg-primary-gradient transition-all text-xs"
            >
              Back To Site
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
