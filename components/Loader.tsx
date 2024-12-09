const Loader = () => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="w-16 h-16"
    >
      <circle
        fill="#AEAAAA"
        stroke="#AEAAAA"
        strokeWidth="15"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0"
        />
      </circle>
      <circle
        fill="#AEAAAA"
        stroke="#AEAAAA"
        strokeWidth="15"
        opacity=".8"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin="0.05"
        />
      </circle>
      <circle
        fill="#AEAAAA"
        stroke="#AEAAAA"
        strokeWidth="15"
        opacity=".6"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin=".1"
        />
      </circle>
      <circle
        fill="#AEAAAA"
        stroke="#AEAAAA"
        strokeWidth="15"
        opacity=".4"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin=".15"
        />
      </circle>
      <circle
        fill="#AEAAAA"
        stroke="#AEAAAA"
        strokeWidth="15"
        opacity=".2"
        r="15"
        cx="35"
        cy="100"
      >
        <animate
          attributeName="cx"
          calcMode="spline"
          dur="2"
          values="35;165;165;35;35"
          keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
          repeatCount="indefinite"
          begin=".2"
        />
      </circle>
    </svg>
  </div>
);

export default Loader;
