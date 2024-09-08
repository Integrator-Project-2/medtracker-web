import { FaTablets, FaTint, FaSyringe, FaNotesMedical } from 'react-icons/fa';
import { BsCapsule } from 'react-icons/bs';
import { FaGlassWater, FaGlassWaterDroplet } from 'react-icons/fa6';

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
                return <BsCapsule size={size} color={color} />;
            case 'liquid':
                return <FaGlassWater size={size} color={color} />;
            case 'solution':
                return <FaGlassWaterDroplet size={size} color={color} />;
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