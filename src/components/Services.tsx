import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Edit3, PenTool, Share2, ArrowRight, CheckCircle, Star, TrendingUp, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Content Production',
      description: 'Our professional team shoots high-quality videos tailored to your brand\'s unique voice and aesthetic',
      features: ['Professional Equipment', '4K Video Quality', 'Creative Direction', 'Brand Alignment'],
      gradient: 'from-blue-500 to-blue-600',
      stats: '500+ Videos Produced'
    },
    {
      icon: Edit3,
      title: 'Video Editing & Graphics',
      description: 'We create captivating videos using fast-paced editing techniques and motion graphics',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Visual Effects'],
      gradient: 'from-purple-500 to-purple-600',
      stats: '1000+ Hours Edited'
    },
    {
      icon: PenTool,
      title: 'Writing & Research',
      description: 'Thorough research and compelling copywriting for each content piece',
      features: ['Market Research', 'Trend Analysis', 'Compelling Copy', 'Brand Voice'],
      gradient: 'from-green-500 to-green-600',
      stats: '200+ Research Reports'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Complete end-to-end social media management and optimization',
      features: ['Content Strategy', 'Platform Optimization', 'Analytics & Reporting', 'Community Management'],
      gradient: 'from-orange-500 to-orange-600',
      stats: '50+ Brands Managed'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#fca311]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#14213d]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#fca311]/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#14213d] to-[#2a4a6b] bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive content creation solutions designed to elevate your brand presence and drive meaningful engagement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-xl bg-white/80 backdrop-blur-sm animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-br ${service.gradient} rounded-xl w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#14213d] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#14213d] group-hover:to-[#2a4a6b] group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <div className="text-sm text-[#fca311] font-semibold mt-2">{service.stats}</div>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center justify-center group-hover:text-gray-700 transition-colors">
                        <CheckCircle className="w-4 h-4 text-[#fca311] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mb-16 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#14213d] to-[#2a4a6b] bg-clip-text text-transparent mb-4">
              Our Proven Process
            </h3>
            <p className="text-gray-600">How we transform your vision into reality</p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#fca311] via-[#ffb84d] to-[#fca311] opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your brand and goals', icon: Users },
                { step: '02', title: 'Strategy', desc: 'Creating a tailored content plan', icon: TrendingUp },
                { step: '03', title: 'Production', desc: 'Bringing your vision to life', icon: Video },
                { step: '04', title: 'Optimization', desc: 'Maximizing performance and reach', icon: Star }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative glass rounded-xl p-8 hover:scale-105 transition-all duration-300 animate-scale-in group bg-white/80 backdrop-blur-sm shadow-xl border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#fca311] to-[#ffb84d] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[#14213d] font-bold text-lg">{item.step}</span>
                      </div>
                    </div>

                    <div className="pt-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#14213d] to-[#2a4a6b] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-[#14213d] mb-3">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Arrow Indicator */}
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#fca311] to-[#ffb84d] rounded-full flex items-center justify-center shadow-lg">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#14213d] to-[#2a4a6b] bg-clip-text text-transparent mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-600">What sets our content creation services apart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Expert Team',
                description: 'Our experienced professionals bring creativity and technical expertise to every project.',
                icon: Users
              },
              {
                title: 'Quality Guarantee',
                description: 'We deliver high-quality content that meets your brand standards and exceeds expectations.',
                icon: Star
              },
              {
                title: 'Fast Turnaround',
                description: 'Quick delivery without compromising on quality - we respect your timelines.',
                icon: TrendingUp
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 animate-scale-in group text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#fca311] to-[#ffb84d] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#14213d] mb-4">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
