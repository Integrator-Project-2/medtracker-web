import CircularProgress from '@mui/material/CircularProgress';

interface LoadingSpinnerProps {
    size?: number;
}

export function LoadingSpinner({ size = 20 }: LoadingSpinnerProps) { // Default size
    return (
        <CircularProgress size={size} sx={{
            color: 'var(--navy)',
            margin: '0 auto'
        }}/>
    );
}