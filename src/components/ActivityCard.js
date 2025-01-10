import React from 'react';
import PropTypes from 'prop-types';

function ActivityCard({ activity }) {
    const formatTimeRange = (start, end) => {
        const formatTime = (timeStr) => {
            const date = new Date(timeStr);
            return date.toLocaleTimeString('en-US', { 
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        };
        
        if (!end) {
            return `${formatTime(start)} - ongoing`;
        }
        return `${formatTime(start)} - ${formatTime(end)}`;
    };

    const calculateDuration = (start, end) => {
        const startTime = new Date(start);
        const endTime = end ? new Date(end) : new Date();
        
        const diffInMinutes = Math.round((endTime - startTime) / (1000 * 60));
        
        if (diffInMinutes < 1) {
            return 'just started';
        }
        
        if (diffInMinutes < 60) {
            return `${diffInMinutes} min`;
        }
        
        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;
        
        if (minutes === 0) {
            return `${hours}h`;
        }
        
        return `${hours}h ${minutes}m`;
    };

    return (
        <div className="activity-card">
            <h2>{activity.description}</h2>
            <div className="activity-metadata">
                <span className="time-range">{formatTimeRange(activity.start_time, activity.end_time)}</span>
                <span className={`duration ${!activity.end_time ? 'ongoing' : ''}`}>
                    {calculateDuration(activity.start_time, activity.end_time)}
                </span>
            </div>
        </div>
    );
}

ActivityCard.propTypes = {
    activity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        task_id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
        start_time: PropTypes.string.isRequired,
        end_time: PropTypes.string
    }).isRequired
};

export default ActivityCard; 