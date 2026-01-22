'use client'

import { motion } from "motion/react"

import {
  Card
} from "@/components/ui/card"

const Table = () => {
  const data = [
    { level: "Good", range: "0-40", effect: "Air is good to inhale", color: "bg-green-500" },
    {
      level: "Satisfactory",
      range: "41-80",
      effect: "Coughing, difficulty in breathing experienced",
      color: "bg-green-400",
    },
    {
      level: "Moderate",
      range: "81-180",
      effect: "Breathing difficulties, aggravation of asthma",
      color: "bg-yellow-400",
    },
    {
      level: "Poor",
      range: "181-280",
      effect: "Reduced brain functionality, and lung function alterations",
      color: "bg-orange-500",
    },
    { level: "Very poor", range: "281-400", effect: "Brain damage and heart failure", color: "bg-red-500" },
    { level: "Severe", range: "400+", effect: "Life-threatening", color: "bg-red-600" },
  ]
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <div className='max-w-7xl mx-auto'>
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Carbon Monoxide (CO) and the harm it causes
          </h2>

          <div
            className="hidden lg:block"
          >
            <Card className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-3 gap-0 divide-x"
              >
                {/* Levels Column */}
                <div className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">Levels</h2>
                  <div className="space-y-3 flex items-start gap-5 flex-col">
                    {data.map((item) => (
                      <div key={item.level} className="py-2 text-lg font-medium text-slate-700">
                        {item.level}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Range Column */}
                <div className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">(mg/m³)</h2>
                  <div className="space-y-3 flex items-start gap-5 flex-col">
                    {data.map((item) => (
                      <div key={item.level} className="py-2 text-lg font-medium text-slate-700">
                        {item.range}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Health Effects Column */}
                <div className="p-6">
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">Health Effects</h2>
                  <div className="space-y-3 ">
                    {data.map((item) => (
                      <div
                        key={item.level}
                        className={`${item.color} rounded-lg px-4 py-2 text-center text-lg font-semibold text-white`}
                      >
                        {item.effect}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Card>
          </div>

          {/* Responsive Card Layout - Visible on mobile and tablet */}
          <div className="lg:hidden space-y-4">
            {data.map((item) => (
              <Card key={item.level} className="overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="mb-3 flex items-baseline justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{item.level}</h3>
                    <span className="text-sm font-medium text-slate-600">{item.range} mg/m³</span>
                  </div>
                  <div
                    className={`${item.color} rounded-lg px-4 py-3 text-center text-sm sm:text-base font-semibold text-white`}
                  >
                    {item.effect}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-xs sm:text-sm text-slate-600 italic">
            *As per CBCB. 8-h hourly average values.
          </div>
        </div>
      </div>

    </main>
  )
}

export default Table
