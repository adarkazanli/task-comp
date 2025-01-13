import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const TaskComponent = ({ task, taskColors, backgroundColor, className }) => {
    const formatTime = (time) => {
        if (!time) return '--:--';
        return time;
    };

    // Get the appropriate background color based on task status
    const getBackgroundColor = (status) => {
        const colorScheme = taskColors[status] || taskColors.backlog;
        return colorScheme.background;
    };

    // Get text color based on background
    const getTextColor = (status) => {
        const colorScheme = taskColors[status] || taskColors.backlog;
        return colorScheme.font;
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
  };

TaskComponent.propTypes = {
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
        backlog: PropTypes.shape({
            background: PropTypes.string.isRequired,
            font: PropTypes.string.isRequired
        }).isRequired,
        planned: PropTypes.shape({
            background: PropTypes.string.isRequired,
            font: PropTypes.string.isRequired
        }).isRequired,
        closed: PropTypes.shape({
            background: PropTypes.string.isRequired,
            font: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default TaskComponent;