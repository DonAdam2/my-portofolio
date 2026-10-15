//custom hooks
import useTheme from '@/js/customHooks/UseTheme';
//components
import Tooltip from '@/js/components/shared/Tooltip';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme(),
    label = theme === 'light' ? 'Dark theme' : 'Light theme';

  return (
    <div className="theme-toggle">
      <Tooltip position="left" isDisplayTooltipIndicator={false} tooltipContent={label}>
        <button
          type="button"
          className="theme-toggle-button"
          onClick={toggleTheme}
          aria-label={label}
        >
          <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} aria-hidden="true"></i>
        </button>
      </Tooltip>
    </div>
  );
};

export default ThemeToggle;
