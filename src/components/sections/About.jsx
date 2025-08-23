import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {

    const frontskills = ["React", "Typescript", "TailwindCSS", "NextJS", "Framer-Motion"];
    const backskills = ["NodeJS", "ExpressJS", "MongoDB", "FastAPI", "Python"];

    return <section id="about" className="min-h-screen flex items-center justify-center relative py-20">
    <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center 
            bg-clip-text text-transparent"> 
            {" "}
            About Me
            </h2>

             <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"> 
            <p className="text-gray-300 mb-6">
                I’m a curious and driven developer who enjoys solving problems, building useful projects, and learning new things fast.
                I value clarity, efficiency, and growth, and I’m committed to consistently delivering high-quality work.
            </p>

            <div className="grid grids-col-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {frontskills.map((tech,key) => (
                            <span
                            key = {key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                        {backskills.map((tech,key) => (
                            <span
                            key = {key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                 <h3 className="text-xl font-bold mb-4">📚 Education</h3>
                 <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>B.Tech in Computer Science (AIML)</strong> - GBPIET (2024 - Present)
                    </li>
                    <li>
                     Releavent Coursework: Data Structures, Algorithms, Cloud Computing, Web Development
                    </li>
                 </ul>
            </div>
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                 <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                 <div className="space-y-4 text-gray-300">
                    <h4 className="text-xl text-gray-300">
                        Hire Me to fill this section!
                    </h4>
                 </div>
            </div>
        </div>

        </div>
</RevealOnScroll>
       

    </section>;
}