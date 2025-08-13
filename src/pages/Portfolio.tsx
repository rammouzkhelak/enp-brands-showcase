import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const brands = [
    {
      name: "Infantino",
      category: "Baby & Toddler",
      description: "Innovative baby products designed to grow with your child and support developmental milestones.",
      focus: "Child Development, Safety, Innovation"
    },
    {
      name: "Vitalbaby",
      category: "Feeding Solutions",
      description: "Premium feeding solutions and baby care products for health-conscious parents.",
      focus: "Nutrition, Wellness, Premium Quality"
    },
    {
      name: "Headu",
      category: "Educational Toys",
      description: "Educational games and toys that make learning fun and engaging for children.",
      focus: "Education, Cognitive Development, Play-Based Learning"
    },
    {
      name: "Huffy",
      category: "Active Lifestyle",
      description: "Bicycles and outdoor equipment encouraging active lifestyles for all ages.",
      focus: "Active Living, Outdoor Recreation, Family Fun"
    },
    {
      name: "Multiprint",
      category: "Creative Play",
      description: "Creative stamping and craft products that inspire artistic expression in children.",
      focus: "Creativity, Arts & Crafts, Self-Expression"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* Header */}
      <header className="relative py-20 bg-corporate-light">
        <div className="container mx-auto px-6">
          <h1 className="heading-large text-corporate-dark">Our Portfolio</h1>
          <p className="body-large text-corporate-medium mt-6 max-w-3xl">
            We work with some of your favorite brands across multiple categories.
          </p>
        </div>
      </header>

      {/* Portfolio Grid */}
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={brand.name} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="heading-small text-corporate-dark">{brand.name}</h3>
                  <ExternalLink className="w-5 h-5 text-corporate-medium hover:text-corporate-dark transition-colors cursor-pointer" />
                </div>
                
                <p className="text-sm font-medium text-corporate-accent mb-4">{brand.category}</p>
                
                <p className="body-medium text-corporate-medium mb-6">
                  {brand.description}
                </p>
                
                <div className="pt-4 border-t border-corporate-light">
                  <p className="text-sm font-medium text-corporate-dark mb-2">Focus Areas:</p>
                  <p className="text-sm text-corporate-medium">{brand.focus}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Investment Philosophy */}
          <section className="mt-20 py-16 bg-corporate-light rounded-lg">
            <div className="text-center max-w-4xl mx-auto px-6">
              <h2 className="heading-medium text-corporate-dark mb-8">Investment Philosophy</h2>
              <p className="body-large text-corporate-medium mb-8">
                We invest in beauty & wellness brands, commerce and technology that serve the modern consumer.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <h3 className="heading-small text-corporate-dark mb-4">Innovation</h3>
                  <p className="body-medium text-corporate-medium">
                    Backing brands that challenge the status quo and redefine their categories.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="heading-small text-corporate-dark mb-4">Growth</h3>
                  <p className="body-medium text-corporate-medium">
                    Supporting scalable businesses with strong market potential and clear pathways to expansion.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="heading-small text-corporate-dark mb-4">Impact</h3>
                  <p className="body-medium text-corporate-medium">
                    Investing in brands that make a positive difference in consumers' lives and communities.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;