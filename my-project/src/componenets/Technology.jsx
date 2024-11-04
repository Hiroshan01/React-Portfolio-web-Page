import { FaReact } from "react-icons/fa"; // React
import { SiExpress } from "react-icons/si"; // Express
import { SiMongodb } from "react-icons/si"; // MongoDB
import { SiNodedotjs } from "react-icons/si"; // Node.js

const Technology = () => {
    return (
        <div className="py-10 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Technologies I Use</h2>
            <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center">
                    <SiMongodb className="text-green-500 text-6xl" />
                    <span className="mt-2">MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiExpress className="text-gray-400 text-6xl" />
                    <span className="mt-2">Express.js</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiNodedotjs className="text-green-600 text-6xl" />
                    <span className="mt-2">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaReact className="text-blue-500 text-6xl" />
                    <span className="mt-2">React</span>
                </div>
            </div>
        </div>
    );
};

export default Technology;
