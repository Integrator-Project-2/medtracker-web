import Image from "next/image";
import { Button } from "./patient-details-button";
import { useRouter } from "next/navigation";

interface PatientDetailsButtonProps {
    patientId: number;
}

export function PatientDetailsButton({ patientId }: PatientDetailsButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/patient-details/${patientId}`);
    };

    return (
        <Button onClick={handleClick}>
            <Image 
                src='fluent-apps-list-icon.svg'
                alt="Detail icon"
                width={24}
                height={24}
            />
        </Button>
    )
}