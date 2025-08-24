import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import Footer from "../components/Footer";
import CircularButton from "../components/CircularButton";
import { ExternalLink } from "lucide-react";
import infantinoImg from "@/assets/brands/infantino.jpg";
import vitalBabyImg from "@/assets/brands/vital-baby.jpg";
import headuImg from "@/assets/brands/headu.jpg";
import huffyImg from "@/assets/brands/huffy.jpg";
import multiprintImg from "@/assets/brands/multiprint.jpg";

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
      imageUrl: infantinoImg
    },
    {
      id: "vitalbaby",
      name: "Vitalbaby", 
      description: "Premium feeding solutions and baby care products for health-conscious parents. Our products combine functionality with safety to support your baby's nutritional journey.",
      focus: "Nutrition, Wellness, Premium Quality",
      collections: ["Nurture", "Protect", "Nourish", "Hydrate"],
      imageUrl: vitalBabyImg
    },
    {
      id: "headu",
      name: "Headu",
      description: "Educational games and toys that make learning fun and engaging for children. We believe in the power of play-based learning to develop crucial skills.",
      focus: "Education, Cognitive Development, Play-Based Learning",
      collections: [],
      imageUrl: headuImg
    },
    {
      id: "huffy",
      name: "Huffy",
      description: "Bicycles and outdoor equipment encouraging active lifestyles for all ages. We're committed to getting families outside and moving together.",
      focus: "Active Living, Outdoor Recreation, Family Fun",
      collections: [],
      imageUrl: huffyImg
    },
    {
      id: "multiprint",
      name: "Multiprint",
      description: "Creative stamping and craft products that inspire artistic expression in children. We foster creativity through hands-on activities and imaginative play.",
      focus: "Creativity, Arts & Crafts, Self-Expression",
      collections: [],
      imageUrl: multiprintImg
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* Brand Navigation Circles */}
      <section className="pt-32 pb-20 md:pt-32 md:pb-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="heading-medium text-corporate-dark text-center mb-6">
            Explore Our Brands
          </h2>
          <p className="body-large text-corporate-medium text-center mb-12 max-w-3xl mx-auto">
            We work with some of your favorite brands across multiple categories, each bringing innovation and quality to their respective markets.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:flex md:justify-center md:items-center md:flex-wrap max-w-lg mx-auto md:max-w-none">
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
                    className="w-16 h-16 object-contain rounded-full"
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
      
      <Footer />
    </div>
  );
};

export default Portfolio;