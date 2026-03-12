import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeftIcon,
  CloudIcon,
  TrendingUpIcon,
  CalendarIcon,
  SparklesIcon,
  CheckIcon,
  LeafIcon,
  SproutIcon,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useLanguage } from '../contexts/LanguageContext'
import { useApp } from '../contexts/AppContext'
export function OnboardingPage() {
  const { t } = useLanguage()
  const { setCurrentPage } = useApp()
  const [step, setStep] = useState(1)
  const [pin, setPin] = useState<string[]>([])
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'sw'>('en')
  const totalSteps = 6
  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))
  const handlePinInput = (num: string) => {
    if (num === '⌫') {
      setPin((prev) => prev.slice(0, -1))
    } else if (pin.length < 4) {
      const newPin = [...pin, num]
      setPin(newPin)
      if (newPin.length === 4) {
        setTimeout(nextStep, 300)
      }
    }
  }
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('onboarding.step1.title')}
              </h2>
              <p className="text-gray-500">
                We'll send you a verification code
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-gray-100 px-4 py-4 rounded-2xl border border-gray-200 text-gray-700 font-semibold flex items-center">
                +880
              </div>
              <input
                type="tel"
                placeholder="1712 345 678"
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                autoFocus
              />
            </div>
            <Button fullWidth onClick={nextStep}>
              {t('btn.sendOtp')}
            </Button>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('onboarding.step2.title')}
              </h2>
              <p className="text-gray-500">Sent to +880 1712 345 678</p>
            </div>
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-14 h-14 text-center text-2xl font-bold bg-gray-50 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-500">
              Didn't receive code?{' '}
              <button className="text-[#2E7D32] font-semibold">Resend</button>
            </p>
            <Button fullWidth onClick={nextStep}>
              {t('btn.verify')}
            </Button>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('onboarding.step3.title')}
              </h2>
              <p className="text-gray-500">This PIN will secure your account</p>
            </div>
            <div className="flex justify-center gap-4 py-6">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full transition-all duration-200 ${pin[i] ? 'bg-[#2E7D32] scale-110' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map((num, i) => (
                <motion.button
                  key={i}
                  className={`h-14 rounded-2xl text-xl font-semibold transition-colors ${num === '' ? 'invisible' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'}`}
                  onClick={() => num !== '' && handlePinInput(String(num))}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  {num}
                </motion.button>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('onboarding.step4.title')}
              </h2>
              <p className="text-gray-500">Tell us a bit about yourself</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Rahim Khan"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Language
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    onClick={() => setSelectedLanguage('en')}
                    className={`p-4 rounded-2xl border-2 transition-all ${selectedLanguage === 'en' ? 'border-[#2E7D32] bg-[#E8F5E9]' : 'border-gray-200 bg-white'}`}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {selectedLanguage === 'en' && (
                        <CheckIcon size={16} className="text-[#2E7D32]" />
                      )}
                      <span
                        className={`font-semibold ${selectedLanguage === 'en' ? 'text-[#2E7D32]' : 'text-gray-600'}`}
                      >
                        English
                      </span>
                    </div>
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedLanguage('sw')}
                    className={`p-4 rounded-2xl border-2 transition-all ${selectedLanguage === 'sw' ? 'border-[#2E7D32] bg-[#E8F5E9]' : 'border-gray-200 bg-white'}`}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {selectedLanguage === 'sw' && (
                        <CheckIcon size={16} className="text-[#2E7D32]" />
                      )}
                      <span
                        className={`font-semibold ${selectedLanguage === 'sw' ? 'text-[#2E7D32]' : 'text-gray-600'}`}
                      >
                        Kiswahili
                      </span>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
            <Button fullWidth onClick={nextStep}>
              {t('btn.next')}
            </Button>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('onboarding.step5.title')}
              </h2>
              <p className="text-gray-500">
                Help us personalize your experience
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] appearance-none">
                  <option>Tangail, Dhaka</option>
                  <option>Mymensingh</option>
                  <option>Rajshahi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Farm Size (Acres)
                </label>
                <div className="flex items-center justify-center gap-6">
                  <motion.button
                    className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-600 hover:bg-gray-200"
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    -
                  </motion.button>
                  <span className="text-3xl font-bold w-20 text-center">
                    2.5
                  </span>
                  <motion.button
                    className="w-14 h-14 rounded-2xl bg-[#E8F5E9] flex items-center justify-center text-2xl font-bold text-[#2E7D32] hover:bg-[#C8E6C9]"
                    whileTap={{
                      scale: 0.9,
                    }}
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </div>
            <Button fullWidth onClick={nextStep}>
              {t('btn.next')}
            </Button>
          </div>
        )
      case 6:
        return (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('onboarding.step6.title')}
              </h2>
              <p className="text-gray-500">Here's what you can do</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-[#E8F5E9] border-none text-left">
                <div className="w-10 h-10 rounded-xl bg-[#2E7D32] flex items-center justify-center mb-3">
                  <CloudIcon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Weather</h3>
                <p className="text-xs text-gray-600">Real-time forecasts</p>
              </Card>
              <Card className="bg-amber-50 border-none text-left">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center mb-3">
                  <TrendingUpIcon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Analytics</h3>
                <p className="text-xs text-gray-600">Track performance</p>
              </Card>
              <Card className="bg-blue-50 border-none text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center mb-3">
                  <CalendarIcon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Tasks</h3>
                <p className="text-xs text-gray-600">Plan your work</p>
              </Card>
              <Card className="bg-purple-50 border-none text-left">
                <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center mb-3">
                  <LeafIcon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Crops</h3>
                <p className="text-xs text-gray-600">Monitor health</p>
              </Card>
            </div>

            <Button fullWidth size="lg" onClick={() => setCurrentPage('main')}>
              {t('btn.getStarted')}
            </Button>
          </div>
        )
      default:
        return null
    }
  }
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-safe">
        {step > 1 ? (
          <motion.button
            onClick={prevStep}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            whileTap={{
              scale: 0.9,
            }}
          >
            <ArrowLeftIcon size={20} />
          </motion.button>
        ) : (
          <div className="w-10" />
        )}

        {/* Progress Indicator */}
        <div className="flex gap-1.5">
          {Array.from({
            length: totalSteps,
          }).map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i + 1 === step ? 'w-6 bg-[#2E7D32]' : i + 1 < step ? 'w-1.5 bg-[#81C784]' : 'w-1.5 bg-gray-200'}`}
              initial={false}
              animate={{
                width: i + 1 === step ? 24 : 6,
              }}
            />
          ))}
        </div>

        {step < totalSteps ? (
          <button
            onClick={() => setCurrentPage('main')}
            className="text-sm font-medium text-gray-500 p-2"
          >
            {t('btn.skip')}
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -20,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
