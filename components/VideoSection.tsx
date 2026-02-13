import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    "/Client File/Videos/Video from RAJESH.mp4",
    "/Client File/Videos/Video from RAJESH(1).mp4",
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0d1c2a] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">Visualization</span>
          <h2 className="text-4xl md:text-5xl font-serif">Experience the Vision</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-[20px] bg-black shadow-2xl">
            <video
              key={currentVideo}
              controls
              className="w-full aspect-video"
              poster=""
            >
              <source src={videos[currentVideo]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {videos.length > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 rounded-[200px] ${
                    index === currentVideo
                      ? 'bg-gold text-[#0d1c2a]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Dwelling {index + 1}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
