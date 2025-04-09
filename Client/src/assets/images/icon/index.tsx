import React from 'react';

interface IconsType {
  width?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SearchIcon: React.FC<IconsType> = ({
  width,
  height,
  className,
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 15.3613 11.4795"
    className={`aicon ${className || ''}`}
  >
    <g>
      <rect height="11" opacity="0" width="11" x="0" y="0"></rect>
      <path
        d="M14.7949 1.88477L14.7949 9.59961C14.7949 10.8398 14.1553 11.4795 12.8906 11.4795L1.89941 11.4795C0.639648 11.4795 0 10.8496 0 9.59961L0 1.88477C0 0.634766 0.639648 0 1.89941 0L12.8906 0C14.1553 0 14.7949 0.639648 14.7949 1.88477ZM1.92871 8.35938C1.92871 8.53516 2.0166 8.66211 2.20703 8.66211L7.24609 8.66211C7.43652 8.66211 7.5293 8.53516 7.5293 8.35938C7.5293 7.75391 6.63086 6.18164 4.72656 6.18164C2.82227 6.18164 1.92871 7.75391 1.92871 8.35938ZM8.87695 7.94922C8.67676 7.94922 8.53027 8.10059 8.53027 8.29102C8.53027 8.47656 8.67676 8.62305 8.87695 8.62305L12.3828 8.62305C12.5781 8.62305 12.7246 8.47656 12.7246 8.29102C12.7246 8.10059 12.5781 7.94922 12.3828 7.94922ZM8.87695 5.41016C8.67676 5.41016 8.53027 5.55664 8.53027 5.74219C8.53027 5.93262 8.67676 6.08398 8.87695 6.08398L12.3828 6.08398C12.5781 6.08398 12.7246 5.93262 12.7246 5.74219C12.7246 5.55664 12.5781 5.41016 12.3828 5.41016ZM3.33008 4.21875C3.33008 5.08789 3.95508 5.7373 4.72656 5.7373C5.49805 5.74219 6.11816 5.08789 6.11816 4.21875C6.11816 3.40332 5.49805 2.72461 4.72656 2.72461C3.95508 2.72461 3.33008 3.40332 3.33008 4.21875ZM8.87695 2.86621C8.67676 2.86621 8.53027 3.0127 8.53027 3.20312C8.53027 3.39355 8.67676 3.54492 8.87695 3.54492L12.3828 3.54492C12.5781 3.54492 12.7246 3.39355 12.7246 3.20312C12.7246 3.0127 12.5781 2.86621 12.3828 2.86621Z"
        fill="white"
        fillOpacity="1"
      ></path>
    </g>
  </svg>
);

export const UserCardIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    onClick={onClick}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#9CA3AF" />
    <path d="M16 8H8V16H16V8Z" fill="#9CA3AF" stroke="white" strokeWidth="1.5" />
    <path d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z" fill="white" />
    <path d="M15 16H9V14.6C9 13.7163 9.7163 13 10.6 13H13.4C14.2837 13 15 13.7163 15 14.6V16Z" fill="white" />
  </svg>
);

export const LockIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#9CA3AF" />
    <path d="M8 11V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V11" stroke="white" strokeWidth="1.5" />
    <rect x="7" y="11" width="10" height="7" rx="1" fill="white" />
    <circle cx="12" cy="14.5" r="1.5" fill="#9CA3AF" />
  </svg>
);

export const WalletIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#9CA3AF" />
    <rect x="4" y="7" width="16" height="11" rx="2" stroke="white" strokeWidth="1.5" />
    <rect x="14" y="11" width="3" height="3" rx="1" fill="white" />
    <path d="M4 10H20" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const ClockIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#9CA3AF" />
    <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5" />
    <path d="M12 8V12L15 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MobileIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#4F86FB" />
    <rect x="8" y="5" width="8" height="14" rx="2" stroke="white" strokeWidth="1.5" />
    <line x1="10" y1="17" x2="14" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const AppIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#B65EEF" />
    <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="white" />
  </svg>
);

export const TrashIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#9CA3AF" />
    <path d="M7 8H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 11V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 11V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 11V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7.5 8L8 17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17L16.5 8" stroke="white" strokeWidth="1.5" />
    <path d="M10 8V6C10 5.44772 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V8" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const SettingsIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#9CA3AF" />
    <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="white" strokeWidth="1.5" />
    <path d="M18.6 12C18.6 12 16.8 16 12 16C7.2 16 5.4 12 5.4 12C5.4 12 7.2 8 12 8C16.8 8 18.6 12 18.6 12Z" stroke="white" strokeWidth="1.5" />
  </svg>
);

export const BookIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#4CAF50" />
    <path d="M7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6Z" stroke="white" strokeWidth="1.5" />
    <path d="M9 10H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 13H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const ChatIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#6366F1" />
    <path d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V13C17 13.5523 16.5523 14 16 14H13L11 16L9 14H8C7.44772 14 7 13.5523 7 13V8Z" stroke="white" strokeWidth="1.5" />
    <circle cx="10" cy="10.5" r="1" fill="white" />
    <circle cx="12" cy="10.5" r="1" fill="white" />
    <circle cx="14" cy="10.5" r="1" fill="white" />
  </svg>
);

export const BugIcon: React.FC<IconsType> = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg 
    width={width} 
    height={height} 
    onClick={onClick}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="24" height="24" rx="4" fill="#EF4444" />
    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
    <path d="M14 10L10 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 10L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 7L6 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 7L18 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 17L6 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 17L18 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
