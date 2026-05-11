"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Scissors, Users, ShieldCheck, Star, PawPrint, GraduationCap, Sparkles, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GroomistryEDULandingPage() {
  const [email, setEmail] = useState("");

  const categories = [
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Technique Classes",
      text: "Breed trims, prep work, scissoring, deshedding, coat care, and practical shop skills.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Communication",
      text: "Scripts, scenarios, policies, and confidence-building tools for better pet-parent conversations.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Groomer Wellness",
      text: "Body mechanics, injury prevention, stretching routines, burnout prevention, and career longevity.",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Educator Resources",
      text: "Workbooks, mini-courses, templates, demos, and downloadable learning materials.",
    },
  ];

  const benefits = [
    "Learn from working groomers and industry educators",
    "Buy individual classes, templates, guides, and downloadable tools",
    "Find education that is practical, specific, and easy to apply",
    "Support independent grooming educators directly",
  ];

  const educatorBenefits = [
    "Upload your own digital products",
    "Sell classes, workbooks, videos, scripts, and templates",
    "Reach groomers looking for real-world education",
    "Keep control of your brand, teaching style, and expertise",
  ];

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f5f2ed]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
              <PawPrint className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xl font-black tracking-tight">GroomistryEDU</p>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-700">Grooming Education Marketplace</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#learn" className="hover:text-teal-700">For Groomers</a>
            <a href="#educators" className="hover:text-teal-700">For Educators</a>
            <a href="#categories" className="hover:text-teal-700">Categories</a>
          </nav>
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfpwlyCC_zGP-kKaEgaGnusG3MEGiWXImCPszJ-YJfkrFPkvA/viewform?usp=publish-editor"
  rel="noopener noreferrer"
>
  <Button className="h-13 rounded-full bg-teal-600 px-7 py-4 text-base font-bold hover:bg-teal-500">
    Join the Waitlist
  </Button>
</a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" />
          <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Built for groomers who want better education
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
                Grooming education, all in one place.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 md:text-xl">
                GroomistryEDU is a marketplace where groomers can discover practical classes, downloadable tools, and real-world education from trusted industry educators.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-full bg-teal-700 px-7 text-base font-bold hover:bg-teal-800">
                  Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="h-12 rounded-full border-slate-300 bg-white px-7 text-base font-bold hover:bg-slate-50">
                  Become an Educator
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-teal-700 text-teal-700" />
                  Technique
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-teal-700 text-teal-700" />
                  Communication
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-teal-700 text-teal-700" />
                  Wellness
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-teal-700 text-teal-700" />
                  Business
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] bg-slate-950 p-4 shadow-2xl">
                <div className="rounded-[1.5rem] bg-white p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Featured Class</p>
                      <h3 className="mt-1 text-2xl font-black">Client Communication Toolkit</h3>
                    </div>
                    <div className="rounded-2xl bg-teal-100 p-3 text-teal-800">
                      <BookOpen className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl bg-[#f5f2ed] p-4">
                      <p className="font-bold">What’s included</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">Scripts, scenarios, policy wording, and confidence-building exercises for groomers.</p>
                    </div>
                    <div className="rounded-2xl bg-[#f5f2ed] p-4">
                      <p className="font-bold">Educator</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">Independent grooming professional with real shop experience.</p>
                    </div>
                    <div className="rounded-2xl bg-teal-700 p-4 text-white">
                      <p className="text-sm font-semibold text-teal-100">Marketplace Preview</p>
                      <p className="mt-1 text-3xl font-black">Courses • Workbooks • Downloads</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="mx-auto max-w-5xl px-5 pb-12">
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-slate-950 text-white shadow-xl">
            <CardContent className="grid gap-6 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
              <div>
                <div className="mb-3 flex items-center gap-2 text-teal-200">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-bold uppercase tracking-[0.18em]">Coming Soon</span>
                </div>
                <h2 className="text-3xl font-black md:text-4xl">Be first to know when GroomistryEDU opens.</h2>
                <p className="mt-3 leading-7 text-slate-300">
                  Join the early access list for launch updates, educator invitations, and first-look marketplace previews.
                </p>
              </div>
              <form className="flex flex-col justify-center gap-3" onSubmit={(e) => e.preventDefault()}>
  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="email"
    placeholder="Enter your email"
    className="h-13 rounded-full border border-white/10 bg-white px-5 py-4 text-slate-950 outline-none ring-teal-300 placeholder:text-slate-400 focus:ring-4"
  />

  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfpwlyCC_zGP-kKaEgaGnusG3MEGiWXImCPszJ-YJfkrFPkvA/viewform?usp=publish-editor"
    target="_blank"
    rel="noopener noreferrer"
  >
  <Button className="rounded-full bg-teal-700 px-5 hover:bg-teal-800">
    Join Waitlist
    </Button>
  </a>
                <p className="text-xs text-slate-400">No spam. Just launch updates and educator opportunities.</p>
</form>
            </CardContent>
          </Card>
        </section>

        {/* For Groomers */}
        <section id="learn" className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">For Groomers</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Education you can actually use behind the table.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Skip the fluff. Find focused resources that help you groom better, communicate clearly, protect your body, and build a stronger career.
              </p>
            </div>
            <div className="grid gap-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="mt-0.5 rounded-full bg-teal-100 p-1 text-teal-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">Marketplace Categories</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Built around the real needs of groomers.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.title} className="rounded-[1.5rem] border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-black">{category.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{category.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* For Educators */}
        <section id="educators" className="mx-auto max-w-7xl px-5 py-16">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">For Educators</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Turn your knowledge into products groomers can buy.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  GroomistryEDU gives grooming educators a place to share their expertise, sell digital products, and reach students who are looking for practical help.
                </p>
                <Button className="mt-7 rounded-full bg-slate-950 px-7 py-6 text-base font-bold hover:bg-slate-800">
                  Apply as an Educator <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="grid gap-3">
                {educatorBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f5f2ed] p-4">
                    <div className="mt-0.5 rounded-full bg-teal-700 p-1 text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <p className="font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Note */}
        <section className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
            <PawPrint className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">A smarter way to grow grooming education.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            GroomistryEDU is being created to connect groomers with educators who teach practical, honest, career-building skills — from the grooming table to the client conversation.
          </p>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-teal-700 p-8 text-center text-white shadow-xl md:p-14">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Ready to be part of it?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-teal-50">
              Join the waitlist and help shape a marketplace made for groomers, by groomers.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
         href=  "https://docs.google.com/forms/d/e/1FAIpQLSfpwlyCC_zGP-kKaEgaGnusG3MEGiWXImCPszJ-YJfkrFPkvA/viewform?usp=publish-editor"
              target="_blank"
  rel="noopener noreferrer"
>
              <Button className="h-12 rounded-full bg-white px-7 text-base font-bold text-teal-800 hover:bg-teal-50">
                Join Waitlist
              </Button>
      </a>        
              <Button variant="outline" className="h-12 rounded-full border-white bg-transparent px-7 text-base font-bold text-white hover:bg-white hover:text-teal-800">
                Educator Interest
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
          <p className="font-semibold">© 2026 GroomistryEDU. Grooming education marketplace.</p>
          <div className="flex gap-5 font-semibold">
            <a href="#" className="hover:text-teal-700">Privacy</a>
            <a href="#" className="hover:text-teal-700">Terms</a>
            <a href="#" className="hover:text-teal-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
