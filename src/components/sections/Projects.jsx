import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20 ">
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center 
            bg-clip-text text-transparent">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover: border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Hatchbit</h3>
                    <p className="text-gray-400 mb-4">
                      A gamified productivity Chrome extension where users focus using timers (e.g., Pomodoro) to earn XP and evolve virtual creatures.
                    It tracks streaks, blocks distractions, offers rewards, and features a leaderboard to encourage friendly competition and consistent focus.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "ChromeExtensionsAPI", "Vite", "ChromeDevTools", "Firebase (planned)"].map((tech, key) => (
                            <span
                            key = {key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center ">
                        <a href="#page" className="text-blue-400 hover:text-blue-300 my-4">
                             View Project → (coming soon)</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover: border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">DocX</h3>
                    <p className="text-gray-400 mb-4">
                        Built a rich text editor using Draft.js with core features including text formatting (bold, italic), font customization,
                        and read/write functionality, offering a clean and responsive writing interface for user input.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Draft.js", "Vite", "Javascript(ES6)", "Editor State Management"].map((tech, key) => (
                            <span
                            key = {key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center ">
                        <a href="#page" className="text-blue-400 hover:text-blue-300 my-4">
                             View Project →(coming soon)</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover: border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Slytherin Neural</h3>
                    <p className="text-gray-400 mb-4">
                      Developed a classic Snake game using JavaScript and implemented an AI agent trained with reinforcement learning techniques to autonomously play and optimize performance,
                       showcasing game logic, AI integration, and environment interaction.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Javascript", "HTML Canvas", "TensorFlow.js", "Q-Learning", "Neural Networks", "Reinforcement Learning"].map((tech, key) => (
                            <span
                            key = {key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                            </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center ">
                        <a href="#page" className="text-blue-400 hover:text-blue-300 my-4">
                             View Project → (coming soon)</a>
                    </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}