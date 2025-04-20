
import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { ContactCta } from '@/components/ui/contact-cta';

const AboutPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm text-teal-600 font-medium uppercase tracking-widest mb-4 block">
              About Us
            </span>
            
            <h1 className="heading-xl mb-6">
              Where AI and Insurance Expertise Converge
            </h1>
            
            <p className="text-xl text-gray-600">
              Tensor Garden combines deep insurance industry knowledge with cutting-edge AI expertise to deliver transformative solutions.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-lg gradient-text mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tensor Garden was founded by two partners who saw a significant gap in the insurance industry: while other sectors were rapidly adopting AI technologies, insurance agencies and MGAs were being left behind with manual processes and outdated systems.
                </p>
                <p>
                  We recognized that insurance agencies face unique challenges that require specialized AI solutions—not generic automation tools. Our founders combined their insurance operations expertise and AI development skills to create custom solutions specifically for the insurance ecosystem.
                </p>
                <p>
                  Today, Tensor Garden is focused exclusively on helping insurance agencies and MGAs leverage AI technology to automate processes, enhance customer experiences, and drive business growth. We believe that AI should be accessible to agencies of all sizes, not just the largest enterprises.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="heading-lg gradient-text mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our mission is to cultivate AI solutions that empower insurance agencies to thrive in an increasingly digital world. We are committed to:
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Delivering practical AI solutions with clear ROI for insurance agencies</li>
                  <li>Making advanced automation accessible to agencies of all sizes</li>
                  <li>Building technology that complements human expertise rather than replacing it</li>
                  <li>Continuously innovating to stay ahead of industry challenges</li>
                  <li>Providing exceptional service and support throughout the implementation process</li>
                </ul>
                <p>
                  We measure our success by the tangible results we deliver: time saved, errors reduced, and growth enabled for our clients.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <SectionHeading
              title="Our Team"
              subtitle="The experts behind Tensor Garden's AI solutions"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="overflow-hidden">
                <div className="aspect-[3/2] bg-gray-100"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Ashish Vaja</h3>
                  <p className="text-teal-600 font-medium mb-4">Co-Founder & Business Strategy</p>
                  <p className="text-gray-600 mb-4">
                    Ashish leads business development, marketing, sales, product management, and strategy at Tensor Garden. With extensive experience in the insurance industry, he understands the unique operational challenges agencies face and how AI can address them.
                  </p>
                  <p className="text-gray-600">
                    Based in Kansas, Ashish works closely with clients to ensure Tensor Garden's solutions deliver measurable business impact and ROI.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="aspect-[3/2] bg-gray-100"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Antonio Pernicano</h3>
                  <p className="text-teal-600 font-medium mb-4">Co-Founder & Technology Lead</p>
                  <p className="text-gray-600 mb-4">
                    Antonio directs all coding and AI development at Tensor Garden. He specializes in creating sophisticated AI systems that can navigate complex insurance workflows and automate previously manual processes.
                  </p>
                  <p className="text-gray-600">
                    Based in California, Antonio's expertise in machine learning, natural language processing, and automation enables Tensor Garden to build cutting-edge solutions tailored for the insurance industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-20">
            <SectionHeading
              title="Why Choose Tensor Garden"
              subtitle="What sets us apart from other technology providers"
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 text-lg font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Insurance Industry Focus</h3>
                  <p className="text-gray-600">
                    Unlike general automation vendors, we exclusively serve the insurance industry and understand its unique workflows, compliance requirements, and operational challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 text-lg font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Practical Solutions</h3>
                  <p className="text-gray-600">
                    We build AI solutions that solve real-world problems with measurable ROI, not theoretical applications that look impressive but deliver little value.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 text-lg font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">End-to-End Support</h3>
                  <p className="text-gray-600">
                    From initial assessment through implementation and ongoing optimization, we provide comprehensive support to ensure successful adoption and results.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 text-lg font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Flexible Engagement Models</h3>
                  <p className="text-gray-600">
                    Whether you need consulting, custom development, or our SaaS products, we offer flexible options to meet your specific needs and budget.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 text-lg font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Proven Results</h3>
                  <p className="text-gray-600">
                    Our case studies demonstrate the tangible impact our solutions have delivered for insurance agencies and MGAs across the United States.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-teal-100 h-12 w-12 flex items-center justify-center mb-4">
                    <span className="text-teal-600 text-lg font-bold">6</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Innovation Partnership</h3>
                  <p className="text-gray-600">
                    With our co-development program, we offer agencies the opportunity to partner in creating innovative solutions while sharing in the financial rewards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Vision for the Future"
            subtitle="Where we see the insurance industry heading with AI"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-gray-600 mb-6">
              We envision a future where insurance agencies leverage AI not just for operational efficiency, but as a competitive advantage that enables them to deliver exceptional client experiences while maintaining the human touch that is essential to insurance.
            </p>
            <p className="text-gray-600 mb-6">
              Our goal is to help insurance agencies embrace this future by providing the tools, expertise, and support they need to successfully adopt AI in ways that complement their existing strengths.
            </p>
            <p className="text-gray-600">
              As the insurance landscape continues to evolve, Tensor Garden will remain at the forefront of innovation, continuously developing new solutions that address emerging challenges and opportunities.
            </p>
          </div>
        </div>
      </section>
      
      <ContactCta
        title="Ready to grow with Tensor Garden?"
        description="Contact us to discuss how our AI solutions can transform your insurance operations."
      />
    </>
  );
};

export default AboutPage;
