'use client'

import { useState, useEffect, useRef } from 'react'

// Translations
const translations = {
  sv: {
    title: 'EuroHorse 2026',
    date: '19–22 februari 2026',
    location: 'Svenska Mässan, Göteborg',
    type: 'Entrébiljett vuxen',
    ticketNumber: 'Biljettnummer',
    orderNumber: 'Ordernummer',
    qrCode: 'QR-kod för entré',
    entries: 'Entréer',
    entryDetails: 'Entré 5 (Korsvägen)\nEntré 3 (Mitt emot Lisebergs huvudentré)',
    openingHours: 'Öppettider',
    openingHoursText: 'Se våra öppettider på eurohorse.se',
    welcomeTitle: 'Välkommen till EuroHorse',
    welcomeSubtitle: 'Norra Europas största mötesplats för alla hästälskare',
    ticketInfo: 'Hej! Jag är din biljett, tappa inte bort mig. Du behöver inte skriva ut biljetten – det går lika bra att visa upp den i din telefon.\n\nDen här biljetten är giltig en valfri dag, du väljer själv vilken: torsdag–söndag.',
    allUnderOneRoof: 'Allt under ett tak',
    allUnderOneRoofText: 'Upplev hela hästfesten! Hos oss hittar du allt under samma tak: shopping i mängder, hästuppvisningar, god mat, dansgolv, hotell, spa m.m.',
    personalMessage: 'Kära Amanda!',
    personalText: 'Detta är din julklapp – en helg tillsammans på EuroHorse 2026! Du är bäst och vi kommer ha så kul med hästar, mat och mys. Detta blir en oförglömlig helg!',
    plan: 'Planen',
    planItems: [
      'Resa till Göteborg tillsammans',
      'Fika och god mat',
      'Kolla på alla fantastiska shower',
      'Ta massor av bilder',
      'Hitta något fint att minnas'
    ],
    buttonComing: 'Jag kommer!',
    buttonSave: 'Spara biljetten som bild',
    footer: 'eurohorse.se',
    footerEn: 'en.eurohorse.se',
    social: 'Följ oss',
    socialHandles: '@eurohorse_se • @eurohorseglig',
    ticketSupport: 'Biljettsupport',
    ticketSupportPhone: 'Telefon: 031-708 80 99',
    ticketSupportEmail: 'tickets@svenskamassan.se',
    countdown: 'Kvar till eventet',
    days: 'dagar',
    hours: 'timmar',
    minutes: 'minuter',
    seconds: 'sekunder',
    toastComing: 'Fantastiskt! Vi ses där! 🎉',
    easterEgg: 'Detective Amanda mode: ON',
  },
  en: {
    title: 'EuroHorse 2026',
    date: 'February 19–22, 2026',
    location: 'Swedish Exhibition & Congress Centre, Gothenburg',
    type: 'Adult Entry Ticket',
    ticketNumber: 'Ticket Number',
    orderNumber: 'Order Number',
    qrCode: 'QR Code for Entry',
    entries: 'Entrances',
    entryDetails: 'Entrance 5 (At Korsvägen)\nEntrance 3 (Opposite Liseberg\'s main entrance)',
    openingHours: 'Opening Hours',
    openingHoursText: 'Check our opening hours at en.eurohorse.se',
    welcomeTitle: 'Welcome to EuroHorse',
    welcomeSubtitle: 'Northern Europe\'s largest gathering for all horse enthusiasts',
    ticketInfo: 'Hello! I am your ticket, don\'t lose me. You don\'t need to print the ticket – it works just as well to show it on your phone.\n\nThis ticket is valid for any day, you choose which one: Thursday to Sunday.',
    allUnderOneRoof: 'All Under One Roof',
    allUnderOneRoofText: 'Experience the complete horse party! You\'ll find everything under the same roof with us: abundant shopping, horse shows, delicious food, dance floors, hotels, spas, and more.',
    personalMessage: 'Dear Amanda!',
    personalText: 'This is your Christmas gift – a weekend together at EuroHorse 2026! You are the best and we will have so much fun with horses, food and coziness. This will be an unforgettable weekend!',
    plan: 'The Plan',
    planItems: [
      'Travel to Gothenburg together',
      'Coffee and good food',
      'Watch all the amazing shows',
      'Take lots of pictures',
      'Find something nice to remember'
    ],
    buttonComing: "I'm coming!",
    buttonSave: 'Save ticket as image',
    footer: 'eurohorse.se',
    footerEn: 'en.eurohorse.se',
    social: 'Follow us',
    socialHandles: '@eurohorse_se • @eurohorseglig',
    ticketSupport: 'Ticket Support',
    ticketSupportPhone: 'Phone: 031-708 80 99',
    ticketSupportEmail: 'tickets@svenskamassan.se',
    countdown: 'Time until event',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    toastComing: 'Fantastic! See you there! 🎉',
    easterEgg: 'Detective Amanda mode: ON',
  }
}

export default function Home() {
  const [language, setLanguage] = useState<'sv' | 'en'>('sv')
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [showToast, setShowToast] = useState(false)
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [typedKeys, setTypedKeys] = useState('')
  const ticketRef = useRef<HTMLDivElement>(null)

  const t = translations[language]

  // Countdown timer
  useEffect(() => {
    const targetDate = new Date('2026-02-19T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  // Easter egg: typing "lucifer"
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      setTypedKeys(prev => {
        const newKeys = (prev + key).slice(-7) // Keep last 7 characters
        if (newKeys === 'lucifer') {
          setEasterEggActive(true)
          setTimeout(() => setEasterEggActive(false), 5000)
        }
        return newKeys
      })
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  // Confetti effect
  const handleComing = async () => {
    const confetti = (await import('canvas-confetti')).default
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  // Save as image
  const handleSaveImage = async () => {
    if (!ticketRef.current) return

    const html2canvas = (await import('html2canvas')).default
    const canvas = await html2canvas(ticketRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    })

    const link = document.createElement('a')
    link.download = 'eurohorse-2026-biljett.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  // Simple QR code placeholder SVG
  const QRCodeSVG = () => (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="200" fill="white" stroke="#000" strokeWidth="2" />
      {/* Simple QR-like pattern */}
      <rect x="20" y="20" width="40" height="40" fill="black" />
      <rect x="80" y="20" width="20" height="20" fill="black" />
      <rect x="120" y="20" width="40" height="40" fill="black" />
      <rect x="20" y="80" width="20" height="20" fill="black" />
      <rect x="60" y="80" width="20" height="20" fill="black" />
      <rect x="100" y="80" width="20" height="20" fill="black" />
      <rect x="140" y="80" width="20" height="20" fill="black" />
      <rect x="20" y="120" width="40" height="40" fill="black" />
      <rect x="80" y="120" width="20" height="20" fill="black" />
      <rect x="120" y="120" width="40" height="40" fill="black" />
      <rect x="60" y="160" width="20" height="20" fill="black" />
      <rect x="100" y="160" width="20" height="20" fill="black" />
      <rect x="140" y="160" width="20" height="20" fill="black" />
    </svg>
  )

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Language Toggle */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-end">
        <button
          onClick={() => setLanguage(language === 'sv' ? 'en' : 'sv')}
          className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:bg-white transition-colors text-sm font-medium text-gray-700"
          aria-label="Toggle language"
        >
          {language === 'sv' ? 'English' : 'Svenska'}
        </button>
      </div>

      {/* Easter Egg */}
      {easterEggActive && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white px-4 py-2 rounded-lg shadow-lg animate-pulse">
          {t.easterEgg}
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          {t.toastComing}
        </div>
      )}

      {/* Countdown */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t.countdown}</h2>
        <div className="flex justify-center gap-4 sm:gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md min-w-[80px]">
            <div className="text-3xl font-bold text-purple-600">{countdown.days}</div>
            <div className="text-sm text-gray-600">{t.days}</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md min-w-[80px]">
            <div className="text-3xl font-bold text-purple-600">{countdown.hours}</div>
            <div className="text-sm text-gray-600">{t.hours}</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md min-w-[80px]">
            <div className="text-3xl font-bold text-purple-600">{countdown.minutes}</div>
            <div className="text-sm text-gray-600">{t.minutes}</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-md min-w-[80px]">
            <div className="text-3xl font-bold text-purple-600">{countdown.seconds}</div>
            <div className="text-sm text-gray-600">{t.seconds}</div>
          </div>
        </div>
      </div>

      {/* Ticket Card */}
      <div className="max-w-4xl mx-auto">
        <div
          id="ticket"
          ref={ticketRef}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-8 text-white text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">{t.title}</h1>
            <p className="text-xl sm:text-2xl">{t.date}</p>
            <p className="text-lg sm:text-xl mt-2 opacity-90">{t.location}</p>
          </div>

          {/* Perforation Line */}
          <div className="ticket-perforation"></div>

          {/* Ticket Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Ticket Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.type}</p>
                <p className="text-lg font-semibold text-gray-800">Vuxen</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.ticketNumber}</p>
                <p className="text-lg font-mono font-semibold text-gray-800">QZ4W45Z6KK</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{t.orderNumber}</p>
                <p className="text-lg font-mono font-semibold text-gray-800">276898</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 flex flex-col items-center justify-center">
              <p className="text-sm text-gray-600 mb-4">{t.qrCode}</p>
              <div className="w-48 h-48 bg-white p-4 rounded-lg shadow-inner">
                <QRCodeSVG />
              </div>
            </div>

            {/* Welcome Section */}
            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.welcomeTitle}</h2>
              <p className="text-lg text-gray-600 mb-4">{t.welcomeSubtitle}</p>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{t.ticketInfo}</p>
              </div>
            </div>

            {/* All Under One Roof */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t.allUnderOneRoof}</h3>
              <p className="text-gray-700 leading-relaxed">{t.allUnderOneRoofText}</p>
            </div>

            {/* Entries & Opening Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{t.entries}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{t.entryDetails}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{t.openingHours}</h3>
                <p className="text-sm text-gray-600">{t.openingHoursText}</p>
              </div>
            </div>

            {/* Personal Message */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{t.personalMessage}</h2>
              <p className="text-gray-700 leading-relaxed">{t.personalText}</p>
            </div>

            {/* The Plan */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t.plan}</h3>
              <ul className="space-y-2">
                {t.planItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleComing}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            aria-label={t.buttonComing}
          >
            {t.buttonComing}
          </button>
          <button
            onClick={handleSaveImage}
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl border-2 border-purple-600 transform hover:scale-105 transition-all duration-200"
            aria-label={t.buttonSave}
          >
            {t.buttonSave}
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-300 text-center space-y-4">
        <div>
          <p className="text-lg font-semibold text-gray-700 mb-1">{t.footer}</p>
          <p className="text-sm text-gray-600">{t.footerEn}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-2">{t.social}</p>
          <p className="text-sm text-gray-600">{t.socialHandles}</p>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-1">{t.ticketSupport}</p>
          <p className="text-sm text-gray-600">{t.ticketSupportPhone}</p>
          <p className="text-sm text-gray-600">{t.ticketSupportEmail}</p>
        </div>
      </footer>
    </main>
  )
}

