import { motion } from "framer-motion";
import { BarChart3, LineChart, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ServicesSection() {
  const services = [{
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights with comprehensive analysis, visualization, and reporting."
  }, {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Strategic Intelligence",
    description: "Make informed business decisions with strategic market analysis, competitive research, and trend forecasting."
  }, {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Domain Investment",
    description: "Secure valuable digital assets and develop effective domain management strategies to enhance your online presence."
  }];
  return <section id="services" className="section-spacing">
      <div className="container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-background rounded-xl p-6 shadow-sm hover-card hover:border-primary/50 border border-transparent group">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-6 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button asChild variant="ghost" className="group px-0">
                <a href="#contact" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>)}
        </div>
      </div>
    </section>;
}