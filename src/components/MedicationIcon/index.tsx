import { FaTablets, FaTint, FaSyringe, FaNotesMedical, FaGlassWhiskey } from 'react-icons/fa';
import { MdOutlineMedication } from 'react-icons/md';
import { GiWaterDrop } from 'react-icons/gi'; 

interface IconProps {
    iconName: string;
    color: string;
    size: number;
}
  
export function MedicationIcon({ iconName, color, size }: IconProps) {
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'tablet':
                return <FaTablets size={size} color={color} />;
            case 'capsule':
                return <MdOutlineMedication size={size} color={color} />;
            case 'liquid':
                return <FaGlassWhiskey size={size} color={color} />;
            case 'solution':
                return <GiWaterDrop size={size} color={color} />;
            case 'drops':
                return <FaTint size={size} color={color} />;
            case 'injectable':
                return <FaSyringe size={size} color={color} />;
            case 'prescription':
                return <FaNotesMedical size={size} color={color} />;
            default:
                return null;
        }
    };

    return (
        <>
          {renderIcon(iconName)}
        </>
    );  
}