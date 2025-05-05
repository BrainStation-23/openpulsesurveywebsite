
import { useEffect, useState } from "react";
import { Youtube } from "lucide-react";

const VideoTrailer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "Fd2kLIVAJVw";
  
  return (
    <section className="section bg-gray-50">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl md:text-center mb-10">
          <h2 className="text-base font-semibold leading-7 text-blue-500">See It In Action</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Watch how Open Pulse Survey works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get a quick overview of our platform and discover how it can transform your employee feedback process.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {!isPlaying ? (
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              {/* Optimized YouTube thumbnail with width/height and loading attributes */}
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
                width="1280"
                height="720"
                loading="lazy"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 cursor-pointer transition-all duration-300"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-xl transform transition-transform hover:scale-105">
                  <Youtube className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Open Pulse Survey Video Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoTrailer;
