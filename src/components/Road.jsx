
const Road = ({ isMoving }) => {
  return (
    <div className="absolute w-[300px] md:w-[400px] h-full bg-gray-600 dark:bg-gray-800 transform rotate-x-[60deg]">
      {/* Road Lines */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-[200%] bg-transparent">
        <div className={`absolute w-full h-full ${isMoving ? 'animate-road' : ''}`}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-10 bg-yellow-400"
              style={{ top: `${i * 20}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Road;