# Component Structure

This project uses separate components for desktop and mobile views to allow independent development and styling without conflicts.

## Directory Structure

```
components/
├── desktop/          # Desktop-specific components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── Location.tsx
│   ├── Residences.tsx
│   ├── Architecture.tsx
│   ├── Investment.tsx
│   ├── Timeline.tsx
│   ├── VideoSection.tsx
│   ├── RegisterCTA.tsx
│   └── Footer.tsx
├── mobile/           # Mobile-specific components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── Location.tsx
│   ├── Residences.tsx
│   ├── Architecture.tsx
│   ├── Investment.tsx
│   ├── Timeline.tsx
│   ├── VideoSection.tsx
│   ├── RegisterCTA.tsx
│   └── Footer.tsx
└── ResponsiveView.tsx  # Wrapper component for responsive rendering
```

## How It Works

1. **ResponsiveView Component**: Detects screen size and renders either desktop or mobile version
2. **Breakpoint**: Default is 768px (can be customized)
3. **Independent Development**: Changes to desktop components won't affect mobile and vice versa

## Usage

### Editing Desktop View
Edit files in `components/desktop/` - these will only affect screens >= 768px

### Editing Mobile View
Edit files in `components/mobile/` - these will only affect screens < 768px

### Changing Breakpoint
In `App.tsx`, you can customize the breakpoint for each component:

```tsx
<ResponsiveView
  desktop={<DesktopHeader />}
  mobile={<MobileHeader />}
  breakpoint={1024}  // Custom breakpoint
/>
```

## Benefits

- ✅ Isolated development environments
- ✅ No CSS conflicts between desktop and mobile
- ✅ Easier to maintain and debug
- ✅ Better performance (only loads relevant components)
- ✅ Cleaner code without complex responsive logic

## Notes

- Both versions start with the same code
- You can now customize each independently
- The ResponsiveView component handles the switching automatically
- Changes are detected on window resize
