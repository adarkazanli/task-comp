'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var ReactMarkdown = require('react-markdown');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var ReactMarkdown__default = /*#__PURE__*/_interopDefaultLegacy(ReactMarkdown);

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

var TaskComponent = function TaskComponent(_ref) {
  var task = _ref.task,
    taskColors = _ref.taskColors;
    _ref.backgroundColor;
    _ref.className;
  var formatTime = function formatTime(time) {
    if (!time) return '--:--';
    return time;
  };

  // Get the appropriate background color based on task status
  var getBackgroundColor = function getBackgroundColor(status) {
    var colorScheme = taskColors[status] || taskColors.backlog;
    return colorScheme.background;
  };

  // Get text color based on background
  var getTextColor = function getTextColor(status) {
    var colorScheme = taskColors[status] || taskColors.backlog;
    return colorScheme.font;
  };
  var getRemainingTimeClass = function getRemainingTimeClass(remainingTime) {
    return remainingTime < 0 ? 'task-remaining negative' : 'task-remaining';
  };
  var formatRemainingTime = function formatRemainingTime(remainingTime) {
    var absoluteTime = Math.abs(Math.round(remainingTime));
    if (absoluteTime < 60) {
      return "".concat(remainingTime < 0 ? '-' : '').concat(absoluteTime, " min");
    }
    var hours = Math.floor(absoluteTime / 60);
    var minutes = absoluteTime % 60;
    var formattedTime = '';
    if (hours > 0) {
      formattedTime += "".concat(hours, "h");
    }
    if (minutes > 0) {
      formattedTime += " ".concat(minutes, "m");
    }
    return "".concat(remainingTime < 0 ? '-' : '').concat(formattedTime);
  };
  var renderActionButtons = function renderActionButtons(status) {
    if (status === 'closed') {
      return null; // Don't show any buttons for completed tasks
    }
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("button", {
      className: "start-button"
    }, "\u25B6 Start"), /*#__PURE__*/React__default["default"].createElement("button", {
      className: "complete-button"
    }, "\u2713 Complete"));
  };
  var renderAnticipatedTime = function renderAnticipatedTime(status, startTime, endTime) {
    if (status === 'closed') {
      return null;
    }
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: "task-time"
    }, "Anticipated: ", formatTime(startTime), " - ", formatTime(endTime));
  };
  var renderRemainingTime = function renderRemainingTime(status, remainingTime) {
    if (status === 'closed') {
      return null;
    }
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: getRemainingTimeClass(remainingTime)
    }, "Remaining: ", formatRemainingTime(remainingTime));
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "task-card",
    style: {
      backgroundColor: getBackgroundColor(task.status),
      color: getTextColor(task.status)
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "task-main"
  }, /*#__PURE__*/React__default["default"].createElement("h1", null, task.title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "task-controls"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "time-estimate"
  }, task.estimated_time, " min estimated"), renderActionButtons(task.status))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "task-metadata"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "task-id"
  }, "ID: ", task.id), renderAnticipatedTime(task.status, task.anticipated_start_time, task.anticipated_end_time), renderRemainingTime(task.status, task.remaining_time)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "task-description"
  }, /*#__PURE__*/React__default["default"].createElement(ReactMarkdown__default["default"], null, task.description)));
};
TaskComponent.propTypes = {
  task: PropTypes__default["default"].shape({
    id: PropTypes__default["default"].number.isRequired,
    title: PropTypes__default["default"].string.isRequired,
    description: PropTypes__default["default"].string.isRequired,
    estimated_time: PropTypes__default["default"].number.isRequired,
    anticipated_start_time: PropTypes__default["default"].string,
    anticipated_end_time: PropTypes__default["default"].string,
    remaining_time: PropTypes__default["default"].number.isRequired,
    status: PropTypes__default["default"].string.isRequired
  }).isRequired,
  backgroundColor: PropTypes__default["default"].string.isRequired,
  taskColors: PropTypes__default["default"].shape({
    backlog: PropTypes__default["default"].shape({
      background: PropTypes__default["default"].string.isRequired,
      font: PropTypes__default["default"].string.isRequired
    }).isRequired,
    planned: PropTypes__default["default"].shape({
      background: PropTypes__default["default"].string.isRequired,
      font: PropTypes__default["default"].string.isRequired
    }).isRequired,
    closed: PropTypes__default["default"].shape({
      background: PropTypes__default["default"].string.isRequired,
      font: PropTypes__default["default"].string.isRequired
    }).isRequired
  }).isRequired
};

exports.TaskComponent = TaskComponent;
//# sourceMappingURL=index.js.map
