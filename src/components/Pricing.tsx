import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Package',
      price: '₹30,000',
      reels: '10 Premium Reels',
      popular: false,
      features: [
        'Professional video shooting',
        'Basic editing & graphics',
        '1 revision included',
        '7-10 days delivery',
        'Social media optimization',
        'Basic analytics report'
      ],
      description: 'Perfect for small businesses starting their content journey'
    },
    {
      name: 'Growth Package',
      price: '₹45,000',
      reels: '15 Premium Reels',
      popular: true,
      features: [
        'Professional video shooting',
        'Advanced editing & motion graphics',
        '2 revisions included',
        '5-7 days delivery',
        'Priority support',
        'Detailed analytics report',
        'Content strategy consultation',
        'Hashtag research'
      ],
      description: 'Ideal for growing brands looking to scale their presence'
    },
    {
      name: 'Pro Package',
      price: '₹60,000',
      reels: '25 Premium Reels',
      popular: false,
      features: [
        'Professional video shooting',
        'Premium editing & advanced graphics',
        'Unlimited revisions',
        '3-5 days delivery',
        'Dedicated account manager',
        'Comprehensive analytics',
        'Monthly strategy sessions',
        'Competitor analysis',
        'Trend forecasting',
        'Custom brand assets'
      ],
      description: 'Complete solution for established brands seeking maximum impact'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#14213d] mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All packages include professional production, editing, and optimization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-[#fca311] shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#fca311] to-[#ffb84d] text-white text-center py-2">
                  <Badge className="bg-white text-[#fca311] font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-[#14213d] mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#fca311]">{plan.price}</span>
                </div>
                <div className="text-lg font-semibold text-[#14213d] mb-2">
                  {plan.reels}
                </div>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[#fca311] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#fca311] hover:bg-[#e8920f] text-white'
                      : 'bg-[#14213d] hover:bg-[#1a2a4a] text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#14213d] mb-4">Need a Custom Package?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We understand that every brand is unique. Contact us to discuss a tailored solution that perfectly fits your specific requirements and budget.
          </p>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="border-[#fca311] text-[#fca311] hover:bg-[#fca311] hover:text-white"
          >
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;