import Chatcord from "../assets/png/chatcord.avif";
import Moviesverse from "../assets/png/moviesverse.avif";

export const projectsData = [
	{
		id: 1,
		projectName: "Adaptive RAG AI Application",
		projectDesc:
			"Built an adaptive RAG AI application with LangChain and LangGraph for scalable, real-time document analysis and Q&A with multi-LLM routing, vector database integration, and interactive React UI.",
		tags: ["Python", "LangChain", "LangGraph", "OpenAI", "FastAPI", "LangSmith", "MongoDB", "React"],
		code: "https://github.com/L-A-L-I-T/AdaptiveRAG",
		image: Chatcord,
	},
	{
		id: 2,
		projectName: "Chatcord",
		projectDesc:
			"Built a scalable real-time chat platform with Socket.io, Redis Pub/Sub, and Kafka-backed message persistence for reliable cross-server delivery, presence tracking, Google OAuth 2.0 auth, and low-latency MongoDB conversation loading.",
		tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "Apache Kafka"],
		code: "https://github.com/L-A-L-I-T/ChatcordApp",
		demo: "https://chatcord-app-8agv.vercel.app/",
		image: Chatcord,
	},
	{
		id: 3,
		projectName: "Moviesverse",
		projectDesc:
			"Developed a responsive movie discovery app using Next.js with SSR/CSR and TMDB API integration to browse Movies, TV Shows, and Actors, with RTK Query caching to reduce redundant requests and improve navigation performance.",
		tags: ["Next.js", "Bootstrap", "TMDB API", "Redux Toolkit", "RTK Query"],
		code: "https://github.com/L-A-L-I-T/Moviesverse-NextJs-SSR/tree/main",
		demo: "https://moviesverse-beryl.vercel.app/movies",
		image: Moviesverse,
	},
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
	id: 1,
	projectName: 'Car Pooling System',
	projectDesc: '',
	tags: ['Flutter', 'React'],
	code: '',
	demo: '',
	image: ''
}, 
*/
