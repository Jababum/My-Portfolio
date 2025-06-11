export default function SparklesBackground() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 z-0">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      >
        <g>
          {/* Sparkles */}
          <circle cx="10%" cy="20%" r="2.5" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="30%" r="1.5" fill="#fff" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="60%" r="2" fill="#fff" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="70%" cy="80%" r="1.8" fill="#fff" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="30%" cy="75%" r="1.2" fill="#fff" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="60%" cy="15%" r="2.2" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="15%" cy="50%" r="1.3" fill="#fff" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="90%" cy="10%" r="1.7" fill="#fff" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <circle cx="40%" cy="40%" r="1.1" fill="#fff" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="75%" cy="55%" r="2.3" fill="#fff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="20%" cy="85%" r="1.6" fill="#fff" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="55%" cy="25%" r="1.4" fill="#fff" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="85%" cy="70%" r="1.9" fill="#fff" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="35%" cy="10%" r="1.2" fill="#fff" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="65%" cy="90%" r="1.5" fill="#fff" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}