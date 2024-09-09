import { Skeleton } from '@mui/material'
export function PageSkeleton() {
    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Skeleton variant="rounded" height={60} style={{ marginBottom: '10px' }} />
            <Skeleton variant="text" height={40} style={{ marginBottom: '10px' }} />
            <Skeleton variant="text" height={40} style={{ marginBottom: '10px' }} />
            <Skeleton variant="text" height={40} />
            <Skeleton variant="text" height={40} />
        </div>
    )
}