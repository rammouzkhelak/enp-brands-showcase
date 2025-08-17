import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import CircularButton from "../components/CircularButton";
import { ExternalLink } from "lucide-react";

const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (brandId: string) => {
    const element = document.getElementById(brandId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const brands = [
    {
      id: "infantino",
      name: "Infantino",
      category: "Baby & Toddler",
      description: "Innovative baby products designed to grow with your child and support developmental milestones. From carriers to toys, we create solutions that make parenting easier and more enjoyable.",
      focus: "Child Development, Safety, Innovation",
      collections: ["Baby Carriers", "Developmental Toys", "Feeding Accessories", "Bath Time Essentials"]
    },
    {
      id: "vitalbaby",
      name: "Vitalbaby", 
      category: "Feeding Solutions",
      description: "Premium feeding solutions and baby care products for health-conscious parents. Our products combine functionality with safety to support your baby's nutritional journey.",
      focus: "Nutrition, Wellness, Premium Quality",
      collections: ["Feeding Bottles", "Sterilizers", "Baby Food Makers", "Travel Essentials"]
    },
    {
      id: "headu",
      name: "Headu",
      category: "Educational Toys",
      description: "Educational games and toys that make learning fun and engaging for children. We believe in the power of play-based learning to develop crucial skills.",
      focus: "Education, Cognitive Development, Play-Based Learning",
      collections: ["Learning Games", "Puzzle Sets", "Creative Kits", "STEM Toys"]
    },
    {
      id: "huffy",
      name: "Huffy",
      category: "Active Lifestyle", 
      description: "Bicycles and outdoor equipment encouraging active lifestyles for all ages. We're committed to getting families outside and moving together.",
      focus: "Active Living, Outdoor Recreation, Family Fun",
      collections: ["Kids Bikes", "Adult Bicycles", "Outdoor Gear", "Accessories"]
    },
    {
      id: "multiprint",
      name: "Multiprint",
      category: "Creative Play",
      description: "Creative stamping and craft products that inspire artistic expression in children. We foster creativity through hands-on activities and imaginative play.",
      focus: "Creativity, Arts & Crafts, Self-Expression",
      collections: ["Stamp Sets", "Craft Kits", "Art Supplies", "Creative Tools"]
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

      {/* Brand Navigation Circles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="heading-medium text-corporate-dark text-center mb-12">
            Explore Our Brands
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {brands.map((brand) => (
              <CircularButton
                key={brand.id}
                text={brand.name}
                onClick={() => scrollToSection(brand.id)}
                arrowDirection="down"
                className="hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Sections */}
      <section className="py-20 bg-corporate-light">
        <div className="container mx-auto px-6">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              id={brand.id}
              className={`mb-20 last:mb-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-12`}
            >
              {/* Brand Logo Placeholder */}
              <div className="flex-shrink-0 w-64 h-64 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <h3 className="heading-small text-corporate-dark mb-2">{brand.name}</h3>
                  <p className="text-sm text-corporate-accent font-medium">{brand.category}</p>
                </div>
              </div>

              {/* Brand Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="heading-large text-corporate-dark mb-6">{brand.name}</h2>
                <p className="body-large text-corporate-medium mb-8 max-w-2xl">
                  {brand.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="heading-small text-corporate-dark mb-4">Focus Areas</h4>
                  <p className="body-medium text-corporate-medium">{brand.focus}</p>
                </div>

                <div className="mb-8">
                  <h4 className="heading-small text-corporate-dark mb-4">Collections</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {brand.collections.map((collection) => (
                      <div
                        key={collection}
                        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <p className="text-sm font-medium text-corporate-dark text-center">
                          {collection}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button className="inline-flex items-center gap-2 text-corporate-accent hover:text-corporate-dark transition-colors duration-300">
                    <span className="font-medium">Explore Brand</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Investment Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;