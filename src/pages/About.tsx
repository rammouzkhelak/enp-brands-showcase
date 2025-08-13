import React, { useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />
      
      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-corporate-medium mb-8">ABOUT</p>
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-dark mb-8 max-w-5xl mx-auto leading-tight">
            Building brands and scaling businesses is in our DNA
          </h1>
          <p className="text-lg text-corporate-medium max-w-4xl mx-auto leading-relaxed">
            We empower a new breed of forward-thinking entrepreneurs with big ideas, to help them build strong 
            brands or technology solutions that stand out and move the world forward. We understand the highly 
            specific needs of a consumer start-up. For over twenty years, we have helped build strong brands and 
            businesses. We bring unrivalled expertise and leadership in the consumer goods industry, from the 
            factory to end-user.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6">What we offer</h2>
            <p className="text-lg text-corporate-medium max-w-4xl mx-auto leading-relaxed">
              We are value-added partners and can leverage our extensive networks to support our portfolio companies 
              as they grow. We serve as a nexus between our companies and enable our founders to learn from each 
              other, partner together and tap into our network of industry experts to accelerate any learning curves.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Item 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We understand the highly specific needs of a consumer start-up
              </h3>
            </div>

            {/* Item 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We offer decades of consumer and retail experience
              </h3>
            </div>

            {/* Item 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We bring unrivalled expertise and networks in the consumer goods industry
              </h3>
            </div>

            {/* Item 4 */}
            <div className="text-center md:col-start-1 md:col-end-2">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We are stage agnostic covering Seed through to Series C/D
              </h3>
            </div>

            {/* Item 5 */}
            <div className="text-center md:col-start-3 md:col-end-4">
              <div className="w-20 h-20 bg-corporate-dark rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                5
              </div>
              <h3 className="text-xl font-bold text-corporate-dark mb-4">
                We offer flexible capital, investing from $500,000 to $15 million
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;