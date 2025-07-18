import React from 'react'
import './index.css';
import {AnimatedGridPatternDemo} from './components/comp';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import {TerminalDemo} from "./components/neofetch";
const App = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 -z-1">
        <AnimatedGridPatternDemo />
      </div>
      <div className="absolute left-18 top-20">
        <TerminalDemo />
      </div>
    </div>
  );
};

export default App;
