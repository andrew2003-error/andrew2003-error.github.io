import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataNode {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const AnimatedBackground = () => {
  const [nodes, setNodes] = useState<DataNode[]>([]);

  useEffect(() => {
    const generateNodes = () => {
      const newNodes: DataNode[] = [];
      for (let i = 0; i < 30; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          size: Math.random() * 4 + 2,
        });
      }
      setNodes(newNodes);
    };
    generateNodes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, hsl(187 100% 50% / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(262 83% 58% / 0.05) 0%, transparent 40%)
          `
        }}
      />
      
      {/* Animated data nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            background: `hsl(187 100% 50% / ${0.3 + Math.random() * 0.3})`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 10px hsl(187 100% 50% / 0.3)",
              "0 0 25px hsl(187 100% 50% / 0.6)",
              "0 0 10px hsl(187 100% 50% / 0.3)",
            ],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines (decorative) */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(262 83% 58%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {nodes.slice(0, 10).map((node, i) => {
          const nextNode = nodes[(i + 5) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
