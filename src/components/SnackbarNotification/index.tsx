import { Alert, AlertProps, Snackbar } from "@mui/material";

interface CustomSnackbarProps {
    open: boolean;
    onClose: () => void;
    message: string;
    severity?: AlertProps['severity']; 
    autoHideDuration?: number; 
}

export function SnackbarNotification({
    open,
    onClose,
    message,
    severity = 'success',
    autoHideDuration = 6000
}: CustomSnackbarProps) {
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={autoHideDuration} 
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={onClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );

}