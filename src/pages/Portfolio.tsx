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
      description: "Innovative baby products designed to grow with your child and support developmental milestones. From carriers to toys, we create solutions that make parenting easier and more enjoyable.",
      focus: "Child Development, Safety, Innovation",
      collections: ["Carrier", "Gear", "Bath", "Teether", "Toys"],
      imageUrl: "/lovable-uploads/1d85af8f-4c2f-4226-8cdf-a0f2154e2174.png"
    },
    {
      id: "vitalbaby",
      name: "Vitalbaby", 
      description: "Premium feeding solutions and baby care products for health-conscious parents. Our products combine functionality with safety to support your baby's nutritional journey.",
      focus: "Nutrition, Wellness, Premium Quality",
      collections: ["Nurture", "Protect", "Nourish", "Hydrate"],
      imageUrl: "/lovable-uploads/298b60f0-ce09-4bd0-9014-48cc5ce67550.png"
    },
    {
      id: "headu",
      name: "Headu",
      description: "Educational games and toys that make learning fun and engaging for children. We believe in the power of play-based learning to develop crucial skills.",
      focus: "Education, Cognitive Development, Play-Based Learning",
      collections: [],
      imageUrl: "/lovable-uploads/48e986d2-7df4-4a57-b8c0-33d9aa7b45ff.png"
    },
    {
      id: "huffy",
      name: "Huffy",
      description: "Bicycles and outdoor equipment encouraging active lifestyles for all ages. We're committed to getting families outside and moving together.",
      focus: "Active Living, Outdoor Recreation, Family Fun",
      collections: [],
      imageUrl: "/lovable-uploads/49710c6d-d9d0-4a23-9469-98562b904904.png"
    },
    {
      id: "multiprint",
      name: "Multiprint",
      description: "Creative stamping and craft products that inspire artistic expression in children. We foster creativity through hands-on activities and imaginative play.",
      focus: "Creativity, Arts & Crafts, Self-Expression",
      collections: [],
      imageUrl: "/lovable-uploads/6cd66727-48bb-40cf-a586-82b68fa5d1fe.png"
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
                imageUrl={brand.imageUrl}
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
              className="mb-20 last:mb-0"
            >
              {/* Brand Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="heading-large text-corporate-dark">{brand.name}</h2>
                  <img 
                    src={brand.imageUrl} 
                    alt={brand.name}
                    className="w-12 h-12 object-contain rounded-full"
                  />
                </div>
                <p className="body-large text-corporate-medium mb-8 max-w-2xl">
                  {brand.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="heading-small text-corporate-dark mb-4">Focus Areas</h4>
                  <p className="body-medium text-corporate-medium">{brand.focus}</p>
                </div>

                {brand.collections.length > 0 && (
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
                )}

                <div className="flex justify-start">
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