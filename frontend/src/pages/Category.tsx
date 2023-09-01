import React, { useEffect, useRef, useState } from 'react';

export const Category = () => {
  const [text, setText] = useState<string>("");
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognition = useRef<SpeechRecognition | null>(null);

  const handleStartCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setVideoStream(new MediaStream(stream.getVideoTracks()));
      setAudioStream(new MediaStream(stream.getAudioTracks()));
    } catch (error) {
      console.error('Error accessing microphone/camera:', error);
    }
  };

  useEffect(() => {
    handleStartCapture();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.srcObject = audioStream;
      setupSpeechRecognition();
    }
  }, [audioStream]);

  const setupSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error('Speech recognition is not supported in this browser');
      return;
    }

    recognition.current = new SpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = true;
    recognition.current.lang = 'en-US';

    recognition.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
     
      console.log(transcript);
      setText(transcript);
    };
    recognition.current.start();
    // recognition.current.onend = () => {
      
    //   recognition.current?.start();
    // };

    
  };


  return (
    <div className='bg-[#ECF0FB]'>
      <h1>Category</h1>
      <div>
        <video className='rounded-2xl' ref={videoRef} autoPlay playsInline muted width={400} height={400}></video>
      </div>
    <audio ref={audioRef} autoPlay muted></audio>
      <div className="flex">
        <textarea
          className="w-2/5 p-3 rounded-lg border-gray-200 border-solid border-2 focus:outline-none overflow-y-scroll max-h-100 resize-none"
          placeholder='Enter text...'
          value={text || ""}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='p-3 rounded-lg border-gray-200 bg-white border-solid border-2 m-3'>Send</button>
      </div>
    </div>
  );
};
