import React from 'react';
import './App.css';
import TaskComponent from './components/TaskComponent';
import { mockTasks } from './mockData/tasks';

function App() {
  const tasks = mockTasks[0].items;
  const backgroundColor = '#000000';  // App background
  
  // Define background and font colors for different task statuses
  const taskColors = {
    backlog: {
      background: '#f8f9fa',    // Light gray for backlog tasks
      font: '#000000'          // Black text for good contrast
    },
    planned: {
      background: '#e8fffe',    // Light blue for planned tasks
      font: '#000000'          // Black text for good contrast
    },
    closed: {
      background: '#bbbbbb',    // Different gray for completed tasks
      font: '#333333'          // Black text for good contrast
    }
  };

  // Sort tasks by anticipated_start_time
  const sortedTasks = [...tasks].sort((a, b) => {
    const timeA = a.anticipated_start_time || '';
    const timeB = b.anticipated_start_time || '';
    return timeA.localeCompare(timeB);
  });

  return (
    <div className="App" style={{ 
      backgroundColor,
      minHeight: '100vh',
      padding: '16px'
    }}>
      <div className="tasks-container">
        {sortedTasks.map(task => (
          <TaskComponent 
            key={task.id} 
            task={task}
            backgroundColor={backgroundColor}
            taskColors={taskColors}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
