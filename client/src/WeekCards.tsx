import React, { useEffect, useState } from 'react';
import DayCard from './DayCard';

const WeekCards: React.FC = () => {
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [currentWeek, setCurrentWeek] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date().getDay();

    const week: string[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(daysOfWeek[(today + i) % 7]);
    }
    setCurrentWeek(week);

    const intervalId = setInterval(() => {
      const now = new Date();
      if (now.getDay() === 0 && now.getHours() === 0 && now.getMinutes() === 0) {
        setCurrentWeek([]);
      }
    }, 60000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-4">
        {currentWeek.map((day, index) => (
          <DayCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default WeekCards;
