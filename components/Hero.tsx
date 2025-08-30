"use client";
import { motion } from "framer-motion";
import Container from "./Container";

function Kpi({label,value,note}:{label:string;value:string;note:string}){
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card p-6 backdrop-blur"
    >
      <div className="text-sm" style={{color:'var(--muted)'}}>{label}</div>
      <div className="mt-2 text-3xl font-extrabold tracking-tight" style={{color:'var(--ink)'}}>{value}</div>
      <div className="mt-2 text-sm" style={{color:'var(--primary)'}}>{note}</div>
    </motion.div>
  );
}

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full blur-3xl"
             style={{background:'color-mix(in oklab, var(--accent) 25%, transparent)'}} />
        <div className="absolute -bottom-20 -right-10 h-[520px] w-[520px] rounded-full blur-3xl"
             style={{background:'color-mix(in oklab, var(--primary) 25%, transparent)'}} />
      </div>
      <Container>
        <div className="relative py-16 md:py-24 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em]"
            style={{color:'var(--muted)'}}
          >
            Oprogramowanie dla wykonawców budowlanych
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-4 max-w-5xl text-4xl md:text-6xl font-extrabold leading-tight"
            style={{color:'var(--ink)'}}
          >
            <span className="bg-clip-text text-transparent"
                  style={{backgroundImage: 'linear-gradient(90deg, var(--accent), var(--primary))'}}>
              Pełna kontrola nad inwestycją — v2
            </span>{" "}
            w standardzie enterprise
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-lg"
            style={{color:'var(--muted)'}}
          >
            (To widoczna zmiana sanity — jeśli to widzisz, masz najnowszy deploy.)
          </motion.p>

        </div>
      </Container>
    </section>
  );
}
