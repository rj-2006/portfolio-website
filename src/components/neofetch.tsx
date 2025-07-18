import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
 <Terminal>
  <TypingAnimation>&gt; neofetch rahul.joshi --about</TypingAnimation>

  <AnimatedSpan delay={1500} className="text-green-500">
    <span>✔ Name: Rahul Joshi (a.k.a. 0xRahul)</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2000} className="text-green-500">
    <span>✔ Role: CS Undergrad @ Engineering College</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2500} className="text-green-500">
    <span>✔ Experience: 2 years of DSA & debugging life</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3000} className="text-green-500">
    <span>✔ Education: B.E. in Ctrl+C, M.E. in Ctrl+V</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3500} className="text-green-500">
    <span>✔ Languages: C++, Python, JavaScript</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4000} className="text-green-500">
    <span>✔ Frameworks: React, Node.js, Next.js, Tailwind</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4500} className="text-green-500">
    <span>✔ Interests: CP, Game Dev 🎮, Chess ♟️</span>
  </AnimatedSpan>

  <AnimatedSpan delay={5000} className="text-green-500">
    <span>✔ Currently: Exploring AI & new frameworks</span>
  </AnimatedSpan>

  <AnimatedSpan delay={5500} className="text-green-500">
    <span>✔ Status: Always compiling...</span>
  </AnimatedSpan>

  <TypingAnimation delay={6000} className="text-muted-foreground">
    Success! Personality matrix loaded.
  </TypingAnimation>
</Terminal>


  );
}
