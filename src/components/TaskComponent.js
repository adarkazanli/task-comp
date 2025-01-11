import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

function TaskComponent({ task, backgroundColor, taskColors }) {
    // ... rest of the code stays the same, just rename TaskCard to TaskComponent ...
}

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
        backlog: PropTypes.string.isRequired,
        planned: PropTypes.string.isRequired,
        closed: PropTypes.string.isRequired
    }).isRequired
};

export default TaskComponent; 