
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Award, Languages } from "lucide-react";

export function AboutSection() {
  const skills = [
    { name: "Data Analysis", level: 95 },
    { name: "Strategic Planning", level: 90 },
    { name: "Market Research", level: 85 },
    { name: "Domain Investment", level: 80 },
    { name: "Business Intelligence", level: 90 },
    { name: "Data Visualization", level: 85 },
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A propos</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
           Lauréat du Master du Management de l'information et de Licence en Gestion avec un 
           passion vers l'analyse de données,la veille stratégique et l'intelligence Stratégique. 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-primary" /> Education & Background
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">2022 - 2024</p>
                  <h4 className="font-medium">Master Spécialisé en Management de l'information</h4>
                  <p className="text-sm text-muted-foreground">Ecole des Sciences de l'information - RABAT</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">2018-2021</p>
                  <h4 className="font-medium">Licence en Sciences de Gestion </h4>
                  <p className="text-sm text-muted-foreground">Faculté Polydisciplinaire Béni Mellal - FP BM</p>
                </div>
              </div>
            </motion.div>
            
        
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Languages className="mr-2 text-primary" /> Langues
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Arabe</span>
                    <span className="text-sm text-muted-foreground">Maternelle</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Français</span>
                    <span className="text-sm text-muted-foreground">Courant</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Anglais</span>
                    <span className="text-sm text-muted-foreground">Avancé</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-4">
                I'm a data analyst and strategic intelligence consultant with over 10 years of experience helping businesses make data-driven decisions. I specialize in transforming complex data into actionable insights.
              </p>
              <p className="text-muted-foreground mb-4">
                My expertise extends to domain name investment, where I help businesses secure valuable digital assets and develop effective online brand strategies.
              </p>
              <p className="text-muted-foreground">
                I've worked with clients across various industries including finance, technology, healthcare, and e-commerce, delivering solutions that drive growth and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
