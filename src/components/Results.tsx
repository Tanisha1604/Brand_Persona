import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, Eye, Heart } from 'lucide-react';

const Results = () => {
  const stats = [
    {
      icon: Users,
      number: '60+',
      label: 'Brands Transformed',
      description: 'Successfully elevated brand presence across industries'
    },
    {
      icon: Eye,
      number: '100M+',
      label: 'Views Generated',
      description: 'Total views across all client content'
    },
    {
      icon: TrendingUp,
      number: '150%',
      label: 'Average Engagement Increase',
      description: 'Improvement in engagement rates'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Clients who would recommend our services'
    }
  ];

  const testimonials = [
    {
      name: '@itz_mohit_verma',
      company: 'Financial Content Creator',
      content: 'Brand Persona completely transformed our content strategy. Our engagement rates skyrocketed by 300% and we gained 500K+ new followers in just 6 months. Their professional approach to financial content creation is unmatched!',
      avatar: 'MJ'
    },
    {
      name: '@financewithsumitt',
      company: 'CA & Financial Educator',
      content: 'The team at Brand Persona understood our vision perfectly. They created content that not only looks professional but also drives real financial education. Our follower count doubled and our content now reaches millions monthly!',
      avatar: 'SF'
    },
    {
      name: '@rupeeswith_rohit',
      company: 'Business & Finance Creator',
      content: 'Brand Personas content creation expertise helped us establish thought leadership in the finance space. Our reels now get millions of views and weve built a community of engaged followers who trust our financial insights.',
      avatar: 'RR'
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-br from-[#14213d] to-[#1a2a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our data-driven approach delivers measurable results that matter to your business growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-[#fca311] rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#fca311] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#fca311] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Preview */}
        <div className="text-center bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Success Story Spotlight</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            "Brand Persona revolutionized our Instagram strategy with data-driven content that resonates with our audience. They helped us create engaging financial content that not only educates but also builds trust. Our reels consistently get millions of views, and we've grown from 100K to over 2M followers while maintaining industry-leading engagement rates."
          </p>
          <div className="text-[#fca311] font-semibold">
            - @itz_mohit_verma, Financial Content Creator
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
