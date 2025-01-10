import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

function TaskCard({ task, backgroundColor, taskColors }) {
    const formatTime = (time) => {
        if (!time) return '--:--';
        return time;
    };

    // Get the appropriate background color based on task status
    const getBackgroundColor = (status) => {
        return taskColors[status] || taskColors.backlog; // Default to backlog color if status not found
    };

    // Get text color based on background
    const getTextColor = (status) => {
        return status === 'closed' ? '#5f6368' : '#202124';
    };

    const getRemainingTimeClass = (remainingTime) => {
        return remainingTime < 0 ? 'task-remaining negative' : 'task-remaining';
    };

    const formatRemainingTime = (remainingTime) => {
        const absoluteTime = Math.abs(Math.round(remainingTime));
        
        if (absoluteTime < 60) {
            return `${remainingTime < 0 ? '-' : ''}${absoluteTime} min`;
        }
        
        const hours = Math.floor(absoluteTime / 60);
        const minutes = absoluteTime % 60;
        
        let formattedTime = '';
        if (hours > 0) {
            formattedTime += `${hours}h`;
        }
        if (minutes > 0) {
            formattedTime += ` ${minutes}m`;
        }
        
        return `${remainingTime < 0 ? '-' : ''}${formattedTime}`;
    };

    const renderActionButtons = (status) => {
        if (status === 'closed') {
            return null;  // Don't show any buttons for completed tasks
        }
        
        return (
            <>
                <button className="start-button">▶ Start</button>
                <button className="complete-button">✓ Complete</button>
            </>
        );
    };

    const renderAnticipatedTime = (status, startTime, endTime) => {
        if (status === 'closed') {
            return null;
        }
        
        return (
            <span className="task-time">
                Anticipated: {formatTime(startTime)} - {formatTime(endTime)}
            </span>
        );
    };

    const renderRemainingTime = (status, remainingTime) => {
        if (status === 'closed') {
            return null;
        }
        
        return (
            <span className={getRemainingTimeClass(remainingTime)}>
                Remaining: {formatRemainingTime(remainingTime)}
            </span>
        );
    };

    return (
        <div 
            className="task-card" 
            style={{ 
                backgroundColor: getBackgroundColor(task.status),
                color: getTextColor(task.status)
            }}
        >
            <div className="task-main">
                <h1>{task.title}</h1>
                <div className="task-controls">
                    <span className="time-estimate">{task.estimated_time} min estimated</span>
                    {renderActionButtons(task.status)}
                </div>
            </div>
            <div className="task-metadata">
                <span className="task-id">ID: {task.id}</span>
                {renderAnticipatedTime(task.status, task.anticipated_start_time, task.anticipated_end_time)}
                {renderRemainingTime(task.status, task.remaining_time)}
            </div>
            <div className="task-description">
                <ReactMarkdown>{task.description}</ReactMarkdown>
            </div>
        </div>
    );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        estimated_time: PropTypes.number.isRequired,
        anticipated_start_time: PropTypes.string,
        anticipated_end_time: PropTypes.string,
        remaining_time: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired,
    backgroundColor: PropTypes.string.isRequired,
    taskColors: PropTypes.shape({
        backlog: PropTypes.string.isRequired,
        planned: PropTypes.string.isRequired,
        closed: PropTypes.string.isRequired
    }).isRequired
};

export default TaskCard; 