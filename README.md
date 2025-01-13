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
  description: "Write comprehensive documentation for the project including:\n" +
               "- Setup instructions\n" +
               "- API endpoints\n" +
               "- Usage examples",
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
  id: number;                        // Unique identifier for the task
  title: string;                     // Task title
  description: string;               // Markdown-supported description
  estimated_time: number;            // Duration in minutes
  anticipated_start_time?: string;   // Format: "HH:mm"
  anticipated_end_time?: string;     // Format: "HH:mm"
  remaining_time: number;            // Minutes remaining
  status: "backlog" | "planned" | "closed";
}
```

### Color Scheme Structure
```typescript
{
  backlog: {
    background: string;   // CSS color value
    font: string;        // CSS color value
  },
  planned: {
    background: string;  // CSS color value
    font: string;       // CSS color value
  },
  closed: {
    background: string; // CSS color value
    font: string;      // CSS color value
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

## Publishing to NPM

1. Update version in `package.json`
```bash
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes
```

2. Build the component
```bash
npm run build
```

3. Login to npm (if not already logged in)
```bash
npm login
```

4. Publish the package
```bash
npm publish --access public
```

Note: For scoped packages (@mpsinc/task-component), make sure you have the correct permissions and use --access public for the first publication.

Key points to remember:
1. Always test your build locally before publishing
2. Use semantic versioning (major.minor.patch)
3. Make sure your dist folder is included in the package but src is not
4. Include all necessary peer dependencies in your package.json
5. Test the published package in a new project before announcing the release
6. After publishing, you can test your package by creating a new React project and installing it:

```bash
npx create-react-app test-app
cd test-app
npm install @mpsinc/task-component
```


