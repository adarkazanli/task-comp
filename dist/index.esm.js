import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Main task card container */\n.task-card {\n    border-radius: 8px;\n    padding: 16px;\n    margin: 12px 0;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    transition: all 0.2s ease-in-out;\n}\n\n.task-card:hover {\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n    transform: translateY(-2px);\n}\n\n/* Task main section */\n.task-main {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-bottom: 12px;\n}\n\n.task-main h1 {\n    font-size: 1.25rem;\n    margin: 0;\n    font-weight: 600;\n    flex: 1;\n}\n\n/* Task controls section */\n.task-controls {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n}\n\n.time-estimate {\n    font-size: 0.9rem;\n    opacity: 0.8;\n}\n\n.start-button,\n.complete-button {\n    padding: 6px 12px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 0.9rem;\n    transition: background-color 0.2s;\n}\n\n.start-button {\n    background-color: #4CAF50;\n    color: white;\n}\n\n.complete-button {\n    background-color: #2196F3;\n    color: white;\n}\n\n.start-button:hover,\n.complete-button:hover {\n    opacity: 0.9;\n}\n\n/* Task metadata section */\n.task-metadata {\n    display: flex;\n    gap: 16px;\n    font-size: 0.9rem;\n    margin-bottom: 12px;\n    flex-wrap: wrap;\n}\n\n.task-id {\n    opacity: 0.7;\n}\n\n.task-time {\n    display: inline-block;\n}\n\n.task-remaining {\n    display: inline-block;\n}\n\n.task-remaining.negative {\n    color: #f44336;\n}\n\n/* Task description section */\n.task-description {\n    font-size: 0.95rem;\n    line-height: 1.5;\n    margin-top: 12px;\n    padding-top: 12px;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n/* Markdown content styling */\n.task-description p {\n    margin: 0 0 8px 0;\n}\n\n.task-description p:last-child {\n    margin-bottom: 0;\n}\n\n/* Responsive design */\n@media (max-width: 600px) {\n    .task-main {\n        flex-direction: column;\n        gap: 12px;\n    }\n\n    .task-controls {\n        width: 100%;\n        justify-content: flex-start;\n    }\n\n    .task-metadata {\n        flex-direction: column;\n        gap: 8px;\n    }\n} ";
styleInject(css_248z);

const TaskComponent = _ref => {
  let {
    task,
    taskColors,
    backgroundColor,
    className
  } = _ref;
  const formatTime = time => {
    if (!time) return '--:--';
    return time;
  };

  // Get the appropriate background color based on task status
  const getBackgroundColor = status => {
    const colorScheme = taskColors[status] || taskColors.backlog;
    return colorScheme.background;
  };

  // Get text color based on background
  const getTextColor = status => {
    const colorScheme = taskColors[status] || taskColors.backlog;
    return colorScheme.font;
  };
  const getRemainingTimeClass = remainingTime => {
    return remainingTime < 0 ? 'task-remaining negative' : 'task-remaining';
  };
  const formatRemainingTime = remainingTime => {
    const absoluteTime = Math.abs(Math.round(remainingTime));
    if (absoluteTime < 60) {
      return "".concat(remainingTime < 0 ? '-' : '').concat(absoluteTime, " min");
    }
    const hours = Math.floor(absoluteTime / 60);
    const minutes = absoluteTime % 60;
    let formattedTime = '';
    if (hours > 0) {
      formattedTime += "".concat(hours, "h");
    }
    if (minutes > 0) {
      formattedTime += " ".concat(minutes, "m");
    }
    return "".concat(remainingTime < 0 ? '-' : '').concat(formattedTime);
  };
  const renderActionButtons = status => {
    if (status === 'closed') {
      return null; // Don't show any buttons for completed tasks
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "start-button"
    }, "\u25B6 Start"), /*#__PURE__*/React.createElement("button", {
      className: "complete-button"
    }, "\u2713 Complete"));
  };
  const renderAnticipatedTime = (status, startTime, endTime) => {
    if (status === 'closed') {
      return null;
    }
    return /*#__PURE__*/React.createElement("span", {
      className: "task-time"
    }, "Anticipated: ", formatTime(startTime), " - ", formatTime(endTime));
  };
  const renderRemainingTime = (status, remainingTime) => {
    if (status === 'closed') {
      return null;
    }
    return /*#__PURE__*/React.createElement("span", {
      className: getRemainingTimeClass(remainingTime)
    }, "Remaining: ", formatRemainingTime(remainingTime));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "task-card",
    style: {
      backgroundColor: getBackgroundColor(task.status),
      color: getTextColor(task.status)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-main"
  }, /*#__PURE__*/React.createElement("h1", null, task.title), /*#__PURE__*/React.createElement("div", {
    className: "task-controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "time-estimate"
  }, task.estimated_time, " min estimated"), renderActionButtons(task.status))), /*#__PURE__*/React.createElement("div", {
    className: "task-metadata"
  }, /*#__PURE__*/React.createElement("span", {
    className: "task-id"
  }, "ID: ", task.id), renderAnticipatedTime(task.status, task.anticipated_start_time, task.anticipated_end_time), renderRemainingTime(task.status, task.remaining_time)), /*#__PURE__*/React.createElement("div", {
    className: "task-description"
  }, /*#__PURE__*/React.createElement(ReactMarkdown, null, task.description)));
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

export { TaskComponent };
//# sourceMappingURL=index.esm.js.map
