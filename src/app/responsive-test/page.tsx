'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Tv, Watch, Gamepad2 } from 'lucide-react';

interface DeviceTest {
  name: string;
  width: number;
  height: number;
  icon: React.ElementType;
  category: string;
  description: string;
}

export default function ResponsiveTestPage() {
  const [currentDevice, setCurrentDevice] = useState<DeviceTest | null>(null);
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const devices: DeviceTest[] = [
    // Mobile Phones
    { name: 'iPhone SE', width: 375, height: 667, icon: Smartphone, category: 'Mobile', description: 'Small iPhone' },
    { name: 'iPhone 12/13/14', width: 390, height: 844, icon: Smartphone, category: 'Mobile', description: 'Standard iPhone' },
    { name: 'iPhone 12/13/14 Pro Max', width: 428, height: 926, icon: Smartphone, category: 'Mobile', description: 'Large iPhone' },
    { name: 'Samsung Galaxy S21', width: 384, height: 854, icon: Smartphone, category: 'Mobile', description: 'Android flagship' },
    { name: 'Google Pixel 6', width: 393, height: 851, icon: Smartphone, category: 'Mobile', description: 'Google phone' },
    
    // Tablets
    { name: 'iPad Mini', width: 768, height: 1024, icon: Tablet, category: 'Tablet', description: 'Small iPad' },
    { name: 'iPad Air/Pro', width: 820, height: 1180, icon: Tablet, category: 'Tablet', description: 'Standard iPad' },
    { name: 'iPad Pro 12.9"', width: 1024, height: 1366, icon: Tablet, category: 'Tablet', description: 'Large iPad' },
    { name: 'Samsung Galaxy Tab', width: 800, height: 1280, icon: Tablet, category: 'Tablet', description: 'Android tablet' },
    
    // Desktops & Laptops
    { name: 'MacBook Air 13"', width: 1440, height: 900, icon: Monitor, category: 'Desktop', description: 'Small laptop' },
    { name: 'MacBook Pro 14"', width: 1512, height: 982, icon: Monitor, category: 'Desktop', description: 'Medium laptop' },
    { name: 'MacBook Pro 16"', width: 1728, height: 1117, icon: Monitor, category: 'Desktop', description: 'Large laptop' },
    { name: 'iMac 24"', width: 1920, height: 1080, icon: Monitor, category: 'Desktop', description: 'Standard desktop' },
    { name: 'iMac 27"/Studio Display', width: 2560, height: 1440, icon: Monitor, category: 'Desktop', description: 'Large desktop' },
    
    // Large Displays
    { name: '32" Monitor', width: 2560, height: 1440, icon: Tv, category: 'Large Display', description: '32-inch monitor' },
    { name: '43" TV/Monitor', width: 3840, height: 2160, icon: Tv, category: 'Large Display', description: '43-inch 4K' },
    { name: '55" TV', width: 3840, height: 2160, icon: Tv, category: 'Large Display', description: '55-inch 4K TV' },
    { name: '75" TV', width: 3840, height: 2160, icon: Tv, category: 'Large Display', description: '75-inch 4K TV' },
    
    // Special Devices
    { name: 'Apple Watch', width: 368, height: 448, icon: Watch, category: 'Wearable', description: 'Smartwatch' },
    { name: 'Nintendo Switch', width: 1280, height: 720, icon: Gamepad2, category: 'Gaming', description: 'Handheld gaming' },
    { name: 'Steam Deck', width: 1280, height: 800, icon: Gamepad2, category: 'Gaming', description: 'PC gaming handheld' },
  ];

  const categories = [...new Set(devices.map(d => d.category))];

  const getDeviceCategory = (width: number) => {
    if (width < 640) return 'Mobile';
    if (width < 1024) return 'Tablet';
    if (width < 1920) return 'Desktop';
    return 'Large Display';
  };

  const getBreakpointInfo = (width: number) => {
    if (width < 360) return { name: 'xs', color: 'red', description: 'Extra small' };
    if (width < 640) return { name: 'sm', color: 'orange', description: 'Small mobile' };
    if (width < 768) return { name: 'md', color: 'yellow', description: 'Large mobile' };
    if (width < 1024) return { name: 'lg', color: 'green', description: 'Tablet' };
    if (width < 1280) return { name: 'xl', color: 'blue', description: 'Small desktop' };
    if (width < 1536) return { name: '2xl', color: 'indigo', description: 'Large desktop' };
    if (width < 2560) return { name: '3xl', color: 'purple', description: 'Extra large' };
    return { name: 'tv', color: 'pink', description: 'TV/Ultra-wide' };
  };

  const currentBreakpoint = getBreakpointInfo(viewportSize.width);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              VANHSYA{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Device Compatibility
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Test our website's responsiveness across all devices. From smartwatches to 75" TVs, 
              VANHSYA works perfectly everywhere.
            </p>
          </div>

          {/* Current Viewport Info */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">{viewportSize.width} × {viewportSize.height}</div>
                <div className="text-slate-300">Current Viewport</div>
              </div>
              <div className="text-center">
                <div className={`text-3xl font-bold text-${currentBreakpoint.color}-400`}>
                  {currentBreakpoint.name.toUpperCase()}
                </div>
                <div className="text-slate-300">{currentBreakpoint.description}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{getDeviceCategory(viewportSize.width)}</div>
                <div className="text-slate-300">Device Category</div>
              </div>
            </div>
          </div>

          {/* Device Categories */}
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                {category === 'Mobile' && <Smartphone className="w-6 h-6" />}
                {category === 'Tablet' && <Tablet className="w-6 h-6" />}
                {category === 'Desktop' && <Monitor className="w-6 h-6" />}
                {category === 'Large Display' && <Tv className="w-6 h-6" />}
                {category === 'Wearable' && <Watch className="w-6 h-6" />}
                {category === 'Gaming' && <Gamepad2 className="w-6 h-6" />}
                {category}
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {devices
                  .filter(device => device.category === category)
                  .map((device) => (
                    <motion.div
                      key={device.name}
                      className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border transition-all duration-200 cursor-pointer ${
                        currentDevice?.name === device.name
                          ? 'border-blue-400 bg-blue-500/10'
                          : 'border-white/10 hover:border-white/20 hover:bg-white/10'
                      }`}
                      onClick={() => setCurrentDevice(device)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <device.icon className="w-5 h-5 text-blue-400" />
                        <div className="font-semibold">{device.name}</div>
                      </div>
                      
                      <div className="text-sm text-slate-300 mb-2">
                        {device.width} × {device.height}
                      </div>
                      
                      <div className="text-xs text-slate-400">
                        {device.description}
                      </div>
                      
                      {/* Breakpoint indicator */}
                      <div className={`mt-2 text-xs px-2 py-1 rounded bg-${getBreakpointInfo(device.width).color}-500/20 text-${getBreakpointInfo(device.width).color}-300 inline-block`}>
                        {getBreakpointInfo(device.width).name}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}

          {/* Responsive Features */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Cross-Device Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: 'Touch Optimized',
                  description: '44px minimum touch targets for all interactive elements'
                },
                {
                  icon: Monitor,
                  title: 'Scalable Typography',
                  description: 'Fluid text scaling from 14px to 72px across all devices'
                },
                {
                  icon: Tablet,
                  title: 'Adaptive Layouts',
                  description: 'Grid and flexbox layouts that adapt to any screen size'
                },
                {
                  icon: Tv,
                  title: 'TV Ready',
                  description: 'Optimized for large screens up to 75" TVs and beyond'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Test Instructions */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">How to Test</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-2">🖥️ Desktop/Laptop</h4>
                <p className="text-slate-300 text-sm">
                  Resize your browser window to test different breakpoints. Use browser dev tools 
                  to simulate specific device sizes.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-2">📱 Mobile/Tablet</h4>
                <p className="text-slate-300 text-sm">
                  Rotate your device between portrait and landscape. Test touch interactions 
                  and swipe gestures throughout the site.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-2">📺 TV/Large Display</h4>
                <p className="text-slate-300 text-sm">
                  Access the site on your smart TV browser or connect a laptop to a large display. 
                  Test navigation with remote or keyboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
