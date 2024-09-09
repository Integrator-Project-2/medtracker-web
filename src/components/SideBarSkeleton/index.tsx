import { Skeleton } from '@mui/material';

export function SideBarSkeleton() {
    return (
        <div style={{ width: '100%', padding: '16px' }}>
            <Skeleton variant="rounded" height={60} width="100%" style={{ marginBottom: '8px' }} /> 
            <Skeleton variant="rounded" height={30} width="100%" style={{ marginBottom: '4px' }} />
            <Skeleton variant="rounded" height={30} width="70%" style={{ marginBottom: '4px' }} /> 
            <Skeleton variant="rounded" height={30} width="70%" /> 
        </div>
    )
}