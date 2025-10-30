import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: '@itz_mohit_verma',
      category: 'Finance',
      description: 'Tech | Infotainment | Education content - Engineer Turned Into Content Creator',
      metrics: { followers: '2.1M', posts: '1,744', engagement: 'Tech & Finance' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      reelUrl: 'https://www.instagram.com/reel/C1uBiNzh80q/',
      tags: ['Instagram', 'Content Creator', 'Education']
    },
    {
      id: 2,
      title: '@financewithsumitt',
      category: 'Finance',
      description: 'Digital creator - Making you financially smarter - Chartered Accountant, 8 years+ experience globally',
      metrics: { followers: '1.8M', posts: '448', engagement: 'Personal Finance' },
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
      reelUrl: 'https://www.instagram.com/reel/DMctoNbzObE/',
      tags: ['Instagram', 'CA', 'Financial Education']
    },
    {
      id: 3,
      title: '@rupeeswith_rohit',
      category: 'Finance',
      description: 'Digital creator - Dhandhe ki Baat No Bakwas - National level Pistol shooter, Oxygen Manufacturer',
      metrics: { followers: '1.5M', posts: '514', engagement: 'Business & Finance' },
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
      reelUrl: 'https://www.instagram.com/reel/DQLMftZEvRk/',
      tags: ['Instagram', 'Digital Creator', 'Business']
    },
    {
      id: 4,
      title: '@ca.swarajjain',
      category: 'Finance',
      description: 'Finance Educator not a Finfluencer - Helping people to achieve Financial Freedom',
      metrics: { followers: '950K', posts: '425', engagement: 'Financial Freedom' },
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop',
      reelUrl: 'https://www.instagram.com/reel/Csi4lNhoY2e/',
      tags: ['Instagram', 'Finance Educator', 'Financial Freedom']
    },
    {
      id: 5,
      title: '@ca.nikitajindal',
      category: 'Finance',
      description: 'Digital creator - Helping you earn better & grow faster - Chartered Accountant, Ex-Manager at EY',
      metrics: { followers: '780K', posts: '1,242', engagement: 'Career & Finance' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      reelUrl: 'https://www.instagram.com/reel/DMc7OC4zD6L/',
      tags: ['Instagram', 'CA', 'Career Growth']
    },
    {
      id: 6,
      title: '@financialadda.co.in',
      category: 'Finance',
      description: 'Financial Adda ® Stock Market | Mutual Funds | IPO - Educational Content on Stock Market, Personal Finance, Mutual Funds',
      metrics: { followers: '650K', posts: '4,057', engagement: 'Finance' },
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
      reelUrl: 'https://www.instagram.com/reel/C6JtrWayvm9/',
      tags: ['Instagram', 'Finance', 'Education']
    }
  ];

  const categories = ['All', 'Technology', 'Fashion', 'Food & Beverage', 'Health & Fitness', 'E-commerce', 'Non-Profit'];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-[#f8f9fa] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-[#14213d] mb-6">
            Our Instagram Success Stories
          </h2>
          <p className="text-xl text-[#14213d]/70 max-w-3xl mx-auto mb-8">
            Discover how we've helped top financial influencers grow their Instagram presence
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={`cursor-pointer px-4 py-2 animate-scale-in ${
                  category === 'All'
                    ? 'bg-[#fca311] hover:bg-[#e8920f] text-white'
                    : 'border-[#fca311] text-[#fca311] hover:bg-[#fca311] hover:text-white'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-[#fca311] hover:bg-[#fca311]/90 text-[#14213d] font-semibold"
                    onClick={() => window.open(item.reelUrl, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Reel
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[#fca311] to-[#e5e5e5] text-[#14213d] font-semibold">
                  {item.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#14213d] mb-2 group-hover:text-[#fca311] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#14213d]/70 mb-4 text-sm">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="glass rounded-lg p-3">
                    <div className="text-lg font-bold text-[#fca311]">{item.metrics.followers}</div>
                    <div className="text-xs text-[#14213d]/60">Followers</div>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <div className="text-lg font-bold text-[#fca311]">{item.metrics.posts}</div>
                    <div className="text-xs text-[#14213d]/60">Posts</div>
                  </div>
                  <div className="glass rounded-lg p-3">
                    <div className="text-lg font-bold text-[#fca311]">{item.metrics.engagement}</div>
                    <div className="text-xs text-[#14213d]/60">Category</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-[#fca311]/30 text-[#fca311] hover:bg-[#fca311] hover:text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-[#fca311] to-[#e5e5e5] rounded-2xl p-8 text-center animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-2xl font-bold text-[#14213d] mb-8">Combined Reach</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-[#14213d] mb-2">7.18M+</div>
              <div className="text-[#14213d]/80">Total Followers</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-[#14213d] mb-2">85%</div>
              <div className="text-[#14213d]/80">Engagement Rate</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-[#14213d] mb-2">50M+</div>
              <div className="text-[#14213d]/80">Monthly Views</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-[#14213d] mb-2">300%</div>
              <div className="text-[#14213d]/80">Growth Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="bg-[#14213d] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's create compelling content that transforms your brand and drives real results
            </p>
            <Button
              size="lg"
              className="bg-[#fca311] hover:bg-[#fca311]/90 text-[#14213d] font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Success Story
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
