import React, { useState, useEffect } from 'react';


export const ProgressBar = ({ progressData }) => {
    const [progressBars, setProgressBars] = useState([]);
  
    useEffect(() => {
      // Initialize progress bars with initial values
      setProgressBars(
        progressData.map(data => ({
          ...data,
          currentProgress: data.progress,
          timerId: setInterval(() => {
            setProgressBars(prevProgressBars =>
              prevProgressBars.map(prevProgressBar =>
                prevProgressBar.title === data.title
                  ? {
                      ...prevProgressBar,
                      currentProgress: prevProgressBar.currentProgress < prevProgressBar.stopValue
                        ? Math.min(prevProgressBar.currentProgress + 1, prevProgressBar.total)
                        : prevProgressBar.currentProgress,
                    }
                  : prevProgressBar
              )
            );
          }, data.interval)
        }))
      );
  
      // Cleanup intervals
      return () => {
        progressBars.forEach(progressBar => clearInterval(progressBar.timerId));
      };
    }, [progressData]);
  
    return (
      <div>
        {progressBars.map((progressBar, index) => (
          <div key={index} className="mb-4">
           <div className='flex justify-between '>
           <h2 className="text-lg font-semibold">{progressBar.title}</h2>
            <p className="mt-2">{progressBar.currentProgress}/{progressBar.total}</p>
           </div>

            <div className="border border-gray-400 w-full h-[6px] relative">
              <div
                className="bg-orange-500 h-full absolute top-0 left-0"
                style={{ width: `${(progressBar.currentProgress / progressBar.total) * 100}%`, transition: `width ${progressBar.interval / 1000}s linear` }}
              >
                
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export const progressData = [
      { title: 'CARNIVOROUS', progress: 0, total: 100, interval: 100, stopValue: 50 },
      { title: 'VEGETARIAN', progress: 0, total: 100, interval: 150, stopValue: 60 },
    ];
  
  
  
  
  
  
  
  
  
  
  
  
  