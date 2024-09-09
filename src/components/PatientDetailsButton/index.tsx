import Image from "next/image";
import { Button } from "./patient-details-button";
import { useRouter } from "next/navigation";

interface PatientDetailsButtonProps {
    patientId: number;
    onClick: () => void;
}

export function PatientDetailsButton({ patientId, onClick }: PatientDetailsButtonProps) {

    return (
        <Button onClick={onClick}>
            <Image 
                src='/fluent-apps-list-icon.svg'
                alt="Detail icon"
                width={24}
                height={24}
            />
        </Button>
    )
}