import CircularProgress from '@mui/material/CircularProgress';

export function LoadingSpinner() {
    return (
        <CircularProgress sx={{
            color: 'var(--navy)'
        }}/>
    )
}