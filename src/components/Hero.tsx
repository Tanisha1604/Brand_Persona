import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#14213d] via-[#14213d] to-[#1a2a4a] text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#fca311]/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#fca311]/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#fca311]/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Elevate Your Brand with <span className="text-[#fca311]">Premium</span><br />
            <span className="text-[#fca311] ml-8 sm:ml-12 lg:ml-16 xl:ml-20">Content Creation</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We transform your brand vision into captivating content that drives engagement and growth
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
          <Button
            onClick={scrollToContact}
            className="bg-[#fca311] hover:bg-[#e8920f] text-[#14213d] px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-glow"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            onClick={scrollToServices}
            className="border-white text-white hover:bg-white hover:text-[#14213d] px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <Play className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#fca311] mb-2 animate-scale-in" style={{ animationDelay: '0.8s' }}>500+</div>
            <div className="text-gray-300 text-sm sm:text-base">Brands Transformed</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#fca311] mb-2 animate-scale-in" style={{ animationDelay: '1s' }}>2M+</div>
            <div className="text-gray-300 text-sm sm:text-base">Views Generated</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#fca311] mb-2 animate-scale-in" style={{ animationDelay: '1.2s' }}>150%</div>
            <div className="text-gray-300 text-sm sm:text-base">Avg Engagement Increase</div>
          </div>
          <div className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#fca311] mb-2 animate-scale-in" style={{ animationDelay: '1.4s' }}>98%</div>
            <div className="text-gray-300 text-sm sm:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
