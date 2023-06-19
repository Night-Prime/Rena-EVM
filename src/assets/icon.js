const Chart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="124"
      viewBox="0 0 24 24"
    >
      <path
        fill="green"
        d="m16.18 19.6l-2.01-3.48c.98-.72 1.66-1.84 1.8-3.12H20a8.55 8.55 0 0 1-3.82 6.6M13 7.03V3c4.3.26 7.74 3.7 8 8h-4.03A4.488 4.488 0 0 0 13 7.03M7 12.5c0 .64.13 1.25.38 1.8L3.9 16.31A8.42 8.42 0 0 1 3 12.5C3 7.97 6.54 4.27 11 4v4.03c-2.25.25-4 2.15-4 4.47m4.5 8.5c-2.97 0-5.58-1.5-7.1-3.82l3.48-2.01A4.47 4.47 0 0 0 11.5 17c.64 0 1.25-.13 1.8-.38l2.01 3.48c-1.15.58-2.44.9-3.81.9Z"
      />
    </svg>
  );
};

const Person = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
      />
    </svg>
  );
};

const Graph = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M23 23v466h466v-18H41v-82.184l85.854-57.234l70.023 70.022l65.133-260.536L387.28 203.7l67.79-107.97l19.317 11.858l6.102-71.1l-60.644 37.616l19.884 12.207l-59.01 93.99l-130.732-65.366l-62.865 251.462l-57.98-57.978L41 367.184V23H23z"
      />
    </svg>
  );
};

const Icon = {
  Chart,
  Person,
  Graph,
};

export default Icon;
