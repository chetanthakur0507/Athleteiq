"use client";

import { motion } from "framer-motion";
import { UploadCloud, BrainCircuit, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <UploadCloud className="w-10 h-10 text-primary mb-4" />,
      title: "Upload Video",
      description: "Record your performance on your phone and upload it to our secure platform.",
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-primary mb-4" />,
      title: "AI Analysis",
      description: "Our AI analyzes your video, counting reps, measuring performance, and detecting any issues.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary mb-4" />,
      title: "Get Results",
      description: "Receive detailed performance data, insights, and track your progress over time.",
    },
  ];

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          How It Works
        </motion.h2>
        <p className="text-lg text-muted-foreground">
          Get started in three simple steps
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-card rounded-2xl shadow-md p-8"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <span className="text-2xl font-bold text-primary">{idx + 1}</span>
            </div>
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}