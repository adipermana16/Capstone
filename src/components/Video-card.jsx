import React, { useState, useRef, useEffect } from "react";
import { Camera, Paperclip } from "lucide-react";

const Videocard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Cleanup stream saat unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  useEffect(() => {
    if (stream && videoRef.current && showCamera) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, showCamera]);

  // Fungsi menangani upload gambar
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Akses Kamera
  const startCamera = async () => {
    setIsLoading(true);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false
      });

      setStream(mediaStream);
      setShowCamera(true);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
         videoRef.current.play().catch(console.error); 
        }
      };
    } catch (err) {
      alert("Gagal mengakses kamera: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Stop Kamera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  // Ambil Gambar dari Kamera
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
      setSelectedImage(canvas.toDataURL("image/jpeg", 0.8));
      stopCamera();
    }
  };

  // File input untuk upload gambar
  const triggerFileInput = () => fileInputRef.current?.click();
  // Reset Gambar
  const resetImage = () => {
    setSelectedImage(null);
    stopCamera();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <>
      {/* Waste Detection Section */}
      <section className="bg-[#f8f9ff] py-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* Video Placeholder or Camera/Image */}
          <div className="w-full md:w-1/2">
            <div className="relative bg-gray-800 rounded-xl overflow-hidden group shadow-xl">
              {selectedImage ? (
                <>
                  <img src={selectedImage} alt="Preview" className="w-full h-64 object-cover" />
                  <div className="absolute bottom-4 right-4">
                    <button onClick={resetImage} className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
                      Reset
                    </button>
                  </div>
                </>
              ) : showCamera ? (
                <>
                  <video ref={videoRef} autoPlay muted playsInline className="w-full h-64 object-cover" />
                  <canvas ref={canvasRef} className="hidden" />
                  <div className="absolute bottom-4 right-4 flex gap-3">
                    <button 
                      onClick={captureImage} 
                      className="bg-white hover:bg-gray-100 text-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <Camera size={24} />
                    </button>
                    <button 
                      onClick={stopCamera} 
                      className="bg-white hover:bg-gray-100 text-red-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      ✕
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full h-64 bg-gray-500 group-hover:scale-105 transition-transform duration-300 flex justify-center items-center">
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-3">
                    <button
                      onClick={triggerFileInput}
                      className="bg-white hover:bg-gray-50 text-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                      title="Unggah Foto"
                    >
                      <Paperclip size={20} />
                    </button>
                    <button
                      onClick={startCamera}
                      disabled={isLoading}
                      className="bg-white hover:bg-gray-50 text-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50"
                      title="Ambil Foto"
                    >
                      {isLoading ? (
                        <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"></div>
                      ) : (
                        <Camera size={20} />
                      )}
                    </button>
                  </div>
                  <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                </>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="w-full md:w-1/2 text-left">
            <div className="border-l-4 border-pink-400 pl-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Komunitas Edukasi
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Share your notes, assignments and study materials with fellow students in just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Videos Section */}
      <section className="bg-[#f5f7ff] py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          Vidio Terkait
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-full h-48 bg-gray-500 group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300">
                  ▶
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-sm">
                  Video Edukasi Sampah {index}
                </h4>
                <p className="text-gray-300 text-xs mt-1">
                  Pelajari cara mengelola sampah dengan benar
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Videocard;