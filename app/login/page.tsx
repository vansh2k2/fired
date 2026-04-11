"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone, Mail, Lock, Eye, EyeOff, User, Calendar, Users,
  ArrowLeft, ChevronRight, CheckCircle2, Loader2, ShieldCheck,
  KeyRound, Flame, Package, Star, Palette
} from "lucide-react"
import { toast } from "sonner"
import { useAuth } from "@/contexts/AuthContext"

// ─── Static OTP (any 6-digit code works in demo) ───────────────────────────
const DEMO_OTP = "123456"

type Tab = "login" | "register"
type Step = "form" | "otp" | "success"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()

  const [tab, setTab] = useState<Tab>("login")
  const [step, setStep] = useState<Step>("form")

  // Register fields
  const [regName, setRegName]     = useState("")
  const [regPhone, setRegPhone]   = useState("")
  const [regEmail, setRegEmail]   = useState("")
  const [regDob, setRegDob]       = useState("")
  const [regGender, setRegGender] = useState("")

  // Login fields
  const [logPhone, setLogPhone] = useState("")
  const [logName, setLogName]   = useState("")

  // OTP
  const [otp, setOtp]         = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const [showOtpHint, setShowOtpHint] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // pending user (filled after form submit, used after OTP)
  const [pendingUser, setPendingUser] = useState<any>(null)

  // reset on tab switch
  useEffect(() => {
    setStep("form")
    setOtp(["", "", "", "", "", ""])
    setPendingUser(null)
    setShowOtpHint(false)
  }, [tab])

  // ── OTP box handlers ───────────────────────────────────────────────────
  const handleOtpChange = (idx: number, val: string) => {
    if (!/^\d*$/.test(val)) return
    const next = [...otp]
    next[idx] = val.slice(-1)
    setOtp(next)
    if (val && idx < 5) inputRefs.current[idx + 1]?.focus()
  }

  const handleOtpKey = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus()
    }
  }

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    if (text.length === 6) {
      setOtp(text.split(""))
      inputRefs.current[5]?.focus()
    }
    e.preventDefault()
  }

  // ── Submit form → go to OTP step ──────────────────────────────────────
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (tab === "register") {
        setPendingUser({ name: regName, phone: regPhone, email: regEmail, dob: regDob, gender: regGender })
      } else {
        setPendingUser({ name: logName, phone: logPhone })
      }
      setStep("otp")
      toast.success("OTP Sent!", {
        description: `A 6-digit code was sent to ${tab === "register" ? regPhone : logPhone}. (Demo: use ${DEMO_OTP})`,
        duration: 6000,
      })
      setTimeout(() => setShowOtpHint(true), 600)
    }, 1200)
  }

  // ── Verify OTP ────────────────────────────────────────────────────────
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    const entered = otp.join("")
    if (entered.length !== 6) {
      toast.error("Enter all 6 digits")
      return
    }
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (entered !== DEMO_OTP) {
        toast.error("Wrong OTP", { description: "Hint: use 123456 for demo." })
        setOtp(["", "", "", "", "", ""])
        inputRefs.current[0]?.focus()
        return
      }

      // Success
      login(pendingUser)
      setStep("success")
      toast.success(tab === "register" ? "Account Created! 🎉" : "Welcome back! 👋", {
        description: `Hello ${pendingUser.name}, you're now logged in.`,
        duration: 4000,
      })
      setTimeout(() => router.push("/"), 2000)
    }, 1000)
  }

  const otpFilled = otp.every(d => d !== "")

  return (
    <div
      className="min-h-screen bg-[#faf9f7] relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Background decorative blobs ─────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/[0.03] rounded-full blur-[140px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

      {/* ── Top spacer for navbar ────────────────────────────────────────── */}
      <div className="pt-24 lg:pt-28" />

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >

            {/* ══ LEFT: Brand panel ══════════════════════════════════════════ */}
            <div className="space-y-10">
              {/* Back link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity text-[11px] font-bold uppercase tracking-[0.18em] group"
              >
                <ArrowLeft size={13} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              {/* Logo + Title */}
              <div className="flex items-center gap-6">
                <img src="/logo.png" alt="Firedclay Originals" className="h-20 w-auto object-contain" />
                <div className="w-px h-14 bg-black/10" />
                <div>
                  <h1 
                    className="text-3xl font-bold tracking-tight text-black"
                    style={{ fontFamily: "'Roboto', sans-serif", letterSpacing: '0.02em' }}
                  >
                    FIREDCLAY
                  </h1>
                  <p 
                    className="text-[11px] font-light tracking-[0.35em] text-black/50 mt-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    ORIGINALS — MEMBER PORTAL
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-black/60 text-base leading-relaxed max-w-md">
                Join the Firedclay community — get exclusive access to new collections,
                personalised project support and early design previews.
              </p>

              {/* Feature cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Flame,       title: "Exclusive Access",     desc: "Early collection drops" },
                  { icon: Package,     title: "Order Tracking",       desc: "Real-time sample status" },
                  { icon: Star,        title: "Member Rewards",       desc: "Points on every order" },
                  { icon: Palette,     title: "Design Consultancy",   desc: "Free expert sessions" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className="flex items-center gap-3 bg-white border border-black/8 p-4 hover:border-black/20 transition-colors"
                  >
                    <div className="w-9 h-9 bg-black/[0.04] flex items-center justify-center text-black/60 flex-shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-black tracking-wide">{item.title}</p>
                      <p className="text-[10px] text-black/40 uppercase tracking-wider mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ══ RIGHT: Auth card ═══════════════════════════════════════════ */}
            <div className="relative bg-white border border-black/10 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">

              {/* top corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-black/[0.04] to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">

                {/* ── STEP: FORM ─────────────────────────────────────────── */}
                {step === "form" && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-10 space-y-7"
                  >
                    {/* Tab switcher */}
                    <div className="flex border border-black/10 p-1 gap-1">
                      {(["register", "login"] as Tab[]).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTab(t)}
                          className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                            tab === t
                              ? "bg-black text-white"
                              : "text-black/40 hover:text-black"
                          }`}
                        >
                          {t === "register" ? "Sign Up" : "Login"}
                        </button>
                      ))}
                    </div>

                    {/* Heading */}
                    <div>
                      <h2 
                        className="text-2xl font-bold text-black uppercase tracking-[0.05em]"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {tab === "register" ? "Create Account" : "Welcome Back"}
                      </h2>
                      <p 
                        className="text-black/40 text-sm mt-1"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {tab === "register"
                          ? "Fill in your details to join Firedclay."
                          : "Sign in with your phone & name."}
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {tab === "register" ? (
                        <motion.form
                          key="reg-form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleFormSubmit}
                          className="space-y-4"
                        >
                          {/* Name */}
                          <Field label="Full Name" icon={<User size={16} />}>
                            <input
                              required
                              value={regName}
                              onChange={e => setRegName(e.target.value)}
                              placeholder="e.g. Arjun Sharma"
                              className="field-input"
                            />
                          </Field>

                          {/* Phone */}
                          <Field label="Phone Number" icon={<Phone size={16} />}>
                            <input
                              required
                              type="tel"
                              value={regPhone}
                              onChange={e => setRegPhone(e.target.value)}
                              placeholder="+91 98765 43210"
                              className="field-input"
                            />
                          </Field>

                          {/* Email */}
                          <Field label="Email Address" icon={<Mail size={16} />}>
                            <input
                              required
                              type="email"
                              value={regEmail}
                              onChange={e => setRegEmail(e.target.value)}
                              placeholder="you@example.com"
                              className="field-input"
                            />
                          </Field>

                          {/* DOB */}
                          <Field label="Date of Birth" icon={<Calendar size={16} />}>
                            <input
                              required
                              type="date"
                              value={regDob}
                              onChange={e => setRegDob(e.target.value)}
                              className="field-input"
                            />
                          </Field>

                          {/* Gender */}
                          <div className="space-y-1.5">
                            <label 
                              className="block text-[10px] font-bold uppercase tracking-[0.18em] text-black"
                              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                              Gender
                            </label>
                            <div className="flex gap-2">
                              {["Male", "Female", "Other"].map(g => (
                                <button
                                  key={g}
                                  type="button"
                                  onClick={() => setRegGender(g)}
                                  className={`flex-1 py-3 text-[11px] font-bold uppercase tracking-wider border transition-all duration-200 ${
                                    regGender === g
                                      ? "border-black bg-black text-white"
                                      : "border-black/15 text-black hover:border-black/40 hover:bg-black/5"
                                  }`}
                                >
                                  {g}
                                </button>
                              ))}
                            </div>
                            {/* hidden required trick */}
                            <input
                              required
                              readOnly
                              value={regGender}
                              className="sr-only"
                              tabIndex={-1}
                            />
                          </div>

                          <SubmitBtn loading={loading} label="Create Account & Send OTP" />
                        </motion.form>

                      ) : (
                        <motion.form
                          key="log-form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleFormSubmit}
                          className="space-y-4"
                        >
                          <Field label="Phone Number" icon={<Phone size={16} />}>
                            <input
                              required
                              type="tel"
                              value={logPhone}
                              onChange={e => setLogPhone(e.target.value)}
                              placeholder="+91 98765 43210"
                              className="field-input"
                            />
                          </Field>

                          <Field label="Full Name" icon={<User size={16} />}>
                            <input
                              required
                              value={logName}
                              onChange={e => setLogName(e.target.value)}
                              placeholder="Your registered name"
                              className="field-input"
                            />
                          </Field>

                          <SubmitBtn loading={loading} label="Send OTP" />

                          <p className="text-center text-[10px] text-black/40 pt-1">
                            Don&apos;t have an account?{" "}
                            <button
                              type="button"
                              onClick={() => setTab("register")}
                              className="text-black font-bold underline underline-offset-2 hover:opacity-70 transition-opacity"
                            >
                              Sign Up
                            </button>
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* ── STEP: OTP ──────────────────────────────────────────── */}
                {step === "otp" && (
                  <motion.div
                    key="otp"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    className="p-8 md:p-10 space-y-8 text-center"
                  >
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 bg-black/[0.04] flex items-center justify-center text-black/70">
                      <ShieldCheck size={30} />
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-black tracking-tight">Verify Your Number</h2>
                      <p className="text-black/45 text-sm mt-2 leading-relaxed">
                        Enter the 6-digit OTP sent to{" "}
                        <span className="font-bold text-black">
                          {tab === "register" ? regPhone : logPhone}
                        </span>
                      </p>
                      {showOtpHint && (
                        <motion.p
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 inline-flex items-center gap-1.5 bg-black/[0.04] px-3 py-1.5 text-[10px] font-bold text-black/50 uppercase tracking-wider"
                        >
                          <KeyRound size={11} />
                          Demo OTP: {DEMO_OTP}
                        </motion.p>
                      )}
                    </div>

                    <form onSubmit={handleVerifyOtp} className="space-y-7">
                      {/* OTP boxes */}
                      <div className="flex gap-2 justify-center" onPaste={handleOtpPaste}>
                        {otp.map((digit, i) => (
                          <input
                            key={i}
                            ref={el => { inputRefs.current[i] = el }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            onChange={e => handleOtpChange(i, e.target.value)}
                            onKeyDown={e => handleOtpKey(i, e)}
                            className={`w-11 h-14 text-center text-xl font-bold border-b-2 bg-transparent outline-none transition-all duration-200 ${
                              digit
                                ? "border-black text-black"
                                : "border-black/20 text-black/30"
                            } focus:border-black`}
                          />
                        ))}
                      </div>

                      <button
                        type="submit"
                        disabled={loading || !otpFilled}
                        className="w-full bg-black disabled:bg-black/30 text-white font-bold py-4 uppercase tracking-[0.15em] text-[11px] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-black/85"
                      >
                        {loading
                          ? <Loader2 size={18} className="animate-spin" />
                          : <CheckCircle2 size={18} />}
                        <span>Verify & Continue</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => { setStep("form"); setOtp(["","","","","",""]) }}
                        className="text-[10px] font-bold text-black/35 hover:text-black uppercase tracking-widest transition-colors underline underline-offset-4"
                      >
                        ← Go back
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* ── STEP: SUCCESS ──────────────────────────────────────── */}
                {step === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    className="p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6 min-h-[400px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 260 }}
                      className="w-20 h-20 bg-black flex items-center justify-center"
                    >
                      <CheckCircle2 size={36} className="text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold text-black tracking-tight">
                        {tab === "register" ? "Account Created!" : "Welcome Back!"}
                      </h2>
                      <p className="text-black/50 text-sm mt-2">
                        Hello <span className="text-black font-bold">{pendingUser?.name}</span>,
                        redirecting you home…
                      </p>
                    </div>
                    <div className="w-8 h-1 bg-black/20 animate-pulse" />
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Footer */}
              <div className="px-8 md:px-10 pb-6 border-t border-black/6 pt-4">
                <p className="text-center text-[10px] text-black/30 uppercase tracking-[0.2em] font-bold">
                  © {new Date().getFullYear()} Firedclay Originals — All Rights Reserved
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── Inline styles for field inputs ─────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .field-input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          background: #faf9f7;
          border: 1.5px solid rgba(0,0,0,0.10);
          outline: none;
          font-size: 13px;
          color: #000;
          transition: border-color 0.2s;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .field-input:focus {
          border-color: rgba(0,0,0,0.65);
        }
        .field-input::placeholder {
          color: rgba(0,0,0,0.25);
        }
      `}} />
    </div>
  )
}

// ── Reusable components ───────────────────────────────────────────────────────

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label 
        className="block text-[10px] font-bold uppercase tracking-[0.18em] text-black"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-black/30 group-focus-within:text-black/70 transition-colors">
          {icon}
        </div>
        {children}
      </div>
    </div>
  )
}

function SubmitBtn({ loading, label }: { loading: boolean; label: string }) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="w-full mt-2 bg-black disabled:bg-black/40 text-white font-bold py-4 uppercase tracking-[0.15em] text-[11px] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-black/85"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {loading
        ? <Loader2 size={17} className="animate-spin" />
        : <ChevronRight size={17} />}
      <span>{label}</span>
    </motion.button>
  )
}
