import React from 'react'
import './index.css';
import {AnimatedGridPatternDemo} from './components/comp';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import {TerminalDemo} from "./components/neofetch";
import {IconCloudDemo} from "./components/cloud";
import {FloatingNavDemo} from "./components/nvbar";

const App = () => {
  return (
    <div className="absolute w-full">
      <div className="fixed inset-0 -z-10 h-screen bg-white/30 background-blur-md">
        <AnimatedGridPatternDemo />
      </div>
      <FloatingNavDemo />
      <div className="mt-32 flex justify between px-8">
        <div>
          <TerminalDemo />
        </div>
        <div class = " ml-35">
          <IconCloudDemo />
        </div>
      </div>
    </div>
  );
};

export default App;