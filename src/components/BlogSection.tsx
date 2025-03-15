import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export function BlogSection() {
  const [sortBy, setSortBy] = useState("latest");
  const blogPosts = [{
    title: "The Future of Data Analysis in Business Decision Making",
    excerpt: "Discover how advanced data analysis techniques are transforming business decision-making processes.",
    image: "/placeholder.svg",
    date: "2023-05-15",
    readTime: 8,
    category: "Data Analysis"
  }, {
    title: "Strategic Intelligence: A Competitive Advantage",
    excerpt: "Learn how strategic intelligence can provide your business with a sustainable competitive advantage.",
    image: "/placeholder.svg",
    date: "2023-04-22",
    readTime: 6,
    category: "Strategy"
  }, {
    title: "Domain Investment: Building a Valuable Digital Asset Portfolio",
    excerpt: "Strategies for building and managing a valuable portfolio of domain names as digital assets.",
    image: "/placeholder.svg",
    date: "2023-03-30",
    readTime: 7,
    category: "Domains"
  }, {
    title: "Data Visualization Best Practices for Business Reports",
    excerpt: "Effective techniques for presenting complex data in clear, actionable business reports.",
    image: "/placeholder.svg",
    date: "2023-03-15",
    readTime: 5,
    category: "Data Analysis"
  }, {
    title: "Market Research Methods for Emerging Industries",
    excerpt: "Advanced market research approaches for analyzing opportunities in emerging industry sectors.",
    image: "/placeholder.svg",
    date: "2023-02-28",
    readTime: 9,
    category: "Strategy"
  }, {
    title: "The ROI of Premium Domain Names for Business Branding",
    excerpt: "Analyzing the return on investment for premium domain names in business branding strategies.",
    image: "/placeholder.svg",
    date: "2023-02-14",
    readTime: 6,
    category: "Domains"
  }];

  // Sort blog posts based on selected option
  const sortedPosts = [...blogPosts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "shortest") {
      return a.readTime - b.readTime;
    } else if (sortBy === "longest") {
      return b.readTime - a.readTime;
    }
    return 0;
  });

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return <section id="blog" className="section-spacing">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog et Actualités</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          
        </motion.div>
        
        <div className="flex justify-end mb-8">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest Posts</SelectItem>
              <SelectItem value="oldest">Oldest Posts</SelectItem>
              <SelectItem value="shortest">Shortest Read</SelectItem>
              <SelectItem value="longest">Longest Read</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post, index) => <motion.article key={index} initial={{
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
        }} className="bg-background rounded-xl overflow-hidden shadow-sm hover-card flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <div className="image-placeholder w-full h-full"></div>
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                <Button asChild variant="ghost" className="self-start group px-0">
                  <a href="#" className="flex items-center">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.article>)}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="#">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>;
}