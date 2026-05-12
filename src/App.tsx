import { useState } from "react";

function App() {

  const content = [
  [
    'Component-based architecture enables reusable UI building blocks',
    'Virtual DOM ensures efficient rendering and performance optimization',
    'Strong ecosystem with extensive community support and third-party libraries',
    'Declarative syntax makes code more predictable and easier to debug'
  ],
  [
    'JSX syntax allows HTML-like code within JavaScript for intuitive UI design',
    'One-way data binding ensures unidirectional data flow for better state management',
    'Hooks API provides functional components with state and lifecycle capabilities',
    'Concurrent rendering enables non-blocking UI updates for smoother experiences'
  ],
  [
    'Official React documentation at react.dev with interactive examples and tutorials',
    'Next.js framework for production-grade server-side rendering and static generation',
    'React DevTools browser extension for debugging component hierarchies and state',
    'Create React App and Vite for rapid project scaffolding and development setup'
  ]
];

  const [ activeContentIndex, setActiveContentIndex ] = useState(0);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center p-4 gap-8">
      <header className="flex items-center justfity-center gap-2">
        <img
        src={"/assets/react.svg"}
        alt="logo"
        width={20}
        height={20}
        className="rounded-full"
        />
        <span>
          <h1 className="font-bold text-white text-lg">React JS</h1>
          <p className="text-white">i.e using the React Library for rendering the UI</p>
        </span>
      </header>
      <div className="flex items-center justify-center gap-4">
        <button 
          className={activeContentIndex === 0 ? "bg-blue-500 px-6 py-3" : "bg-blue-200 px-6 py-3"}
          onClick={() => setActiveContentIndex(0)}
        >
          Why React
        </button>
        <button 
          className={activeContentIndex === 1 ? "bg-blue-500 px-6 py-3" : "bg-blue-200 px-6 py-3"}
          onClick={() => setActiveContentIndex(1)}
          >Core Features
        </button>
        <button
          className={activeContentIndex === 2 ? "bg-blue-500 px-6 py-3" : "bg-blue-200 px-6 py-3"}
          onClick={() => setActiveContentIndex(2)}
          >Related Resources
        </button>
      </div>

      <div className="flex flex-col items-center px-5">
        <ul className="text-white">
          {content[activeContentIndex].map((item, index) => (
             <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
