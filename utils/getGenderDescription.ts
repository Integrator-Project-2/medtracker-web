export const getGenderDescription = (gender: 'M' | 'F' | 'NB' | null): string => {
    switch (gender) {
        case 'M':
            return 'Male';
        case 'F':
            return 'Female';
        case 'NB':
            return 'Non-Binary';
        default:
            return 'Not specified'; 
    }
};