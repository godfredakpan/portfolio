// components/FlowLine.tsx
export default function FlowLine({ color = "#888", opacity = 0.3 }) {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        width="100%"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,100
            C120,60,240,140,360,100
            C480,60,600,140,720,100
            C840,60,960,140,1080,100
            C1200,60,1320,140,1440,100
          "
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity={opacity}
        />
      </svg>
    </div>
  );
}
