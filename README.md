# React Task Component

A flexible and responsive React component for displaying task cards with time tracking and status management capabilities.

## Installation

```bash
npm install @mpsinc/task-component
```

## Features

- 📊 Task status visualization
- ⏱️ Time tracking and formatting
- 🎨 Customizable color schemes
- 📱 Responsive design
- ✨ Markdown support for task descriptions
- 🔄 Action buttons for task management

## Usage

### Basic Implementation

```jsx
import { TaskComponent } from 'react-task-component';
const taskColors = {
backlog: {
background: '#f5f5f5',
font: '#333333'
},
planned: {
background: '#e3f2fd',
font: '#1976d2'
},
closed: {
background: '#e8f5e9',
font: '#2e7d32'
}
};
const task = {
id: 1,
title: "Complete Project Documentation",
description: "Write comprehensive documentation for the project including:\n- Setup instructions\n- API endpoints\n- Usage examples",
estimated_time: 120, // in minutes
anticipated_start_time: "14:00",
anticipated_end_time: "16:00",
remaining_time: 45, // in minutes
status: "planned"
};
function App() {
return (
<TaskComponent
task={task}
taskColors={taskColors}
backgroundColor="#ffffff"
/>
);
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| task | Object | Yes | Task data object |
| taskColors | Object | Yes | Color schemes for different task statuses |
| backgroundColor | String | Yes | Background color for the component |
| className | String | No | Additional CSS classes |

### Task Object Structure
```typescript
{
id: number;
title: string;
description: string;
estimated_time: number; // in minutes
anticipated_start_time?: string; // format: "HH:mm"
anticipated_end_time?: string; // format: "HH:mm"
remaining_time: number; // in minutes
status: "backlog" | "planned" | "closed";
}
```


### Color Scheme Structure
```typescript
{
backlog: {
background: string;
font: string;
},
planned: {
background: string;
font: string;
},
closed: {
background: string;
font: string;
}
}
```


## Styling

The component comes with default styling, but you can override it by targeting the following CSS classes:

- `.task-card` - Main container
- `.task-main` - Title and controls section
- `.task-controls` - Action buttons container
- `.task-metadata` - Task information section
- `.task-description` - Markdown content area
- `.start-button` - Start action button
- `.complete-button` - Complete action button

## Time Formatting

- Remaining time is automatically formatted:
  - Less than 1 hour: "45 min"
  - More than 1 hour: "2h 15m"
  - Negative time: "-45 min" or "-2h 15m"

## Markdown Support

The description field supports Markdown syntax through `react-markdown`. Example:

```markdown
# Heading
- List item 1
- List item 2

**Bold text** and *italic text*

## Subheading
1. Numbered list
2. Another item

> This is a blockquote

[Link example](https://example.com)
```




## Dependencies

- React 16.8.0 or higher
- react-markdown
- prop-types

## Development

1. Clone the repository
```bash
git clone https://github.com/yourusername/react-task-component.git  
```
2. Install dependencies
```bash
npm install
```
3. Run the development server
```bash
npm start
```

4. Build the component
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support

For support, email support@example.com or open an issue in the GitHub repository.


