import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Dhanukar colony Kothrud', 'Pune, Maharashtra']
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+91 8261890834', '+91 8308760502']
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['hello@brandpersona.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#14213d] mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch with us today and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#14213d]">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#14213d] font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311]"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#14213d] font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311]"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-[#14213d] font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311]"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-[#14213d] font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311]"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="text-[#14213d] font-medium">
                        Service Interested In
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="content-production">Content Production</SelectItem>
                          <SelectItem value="video-editing">Video Editing & Graphics</SelectItem>
                          <SelectItem value="writing-research">Writing & Research</SelectItem>
                          <SelectItem value="social-media">Social Media Management</SelectItem>
                          <SelectItem value="full-package">Complete Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-[#14213d] font-medium">
                        Budget Range
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="starter">₹25,000 - ₹35,000</SelectItem>
                          <SelectItem value="growth">₹35,000 - ₹50,000</SelectItem>
                          <SelectItem value="pro">₹50,000 - ₹75,000</SelectItem>
                          <SelectItem value="enterprise">₹75,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#14213d] font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-1 border-gray-300 focus:border-[#fca311] focus:ring-[#fca311] min-h-[120px]"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-[#fca311] hover:bg-[#e8920f] text-[#14213d] font-semibold py-3"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-[#fca311] rounded-full">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#14213d] mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Response Promise */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-[#14213d] to-[#1a2a4a] text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-300 text-sm mb-4">
                  We respond to all inquiries within 2 hours during business hours
                </p>
                <div className="text-[#fca311] font-semibold">
                  Average response time: 30 minutes
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#14213d] mb-8">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="font-semibold text-[#14213d] mb-2">How long does a typical project take?</h4>
              <p className="text-gray-600 text-sm">Most projects are completed within 5-10 business days, depending on the package and complexity.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#14213d] mb-2">Do you provide revisions?</h4>
              <p className="text-gray-600 text-sm">Yes! All packages include revisions. The number varies by package, with Pro offering unlimited revisions.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#14213d] mb-2">What industries do you work with?</h4>
              <p className="text-gray-600 text-sm">We work with all industries - from startups to established enterprises across tech, fashion, food, and more.</p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#14213d] mb-2">Can you handle ongoing projects?</h4>
              <p className="text-gray-600 text-sm">Absolutely! We offer monthly retainers and ongoing partnerships for consistent content creation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;