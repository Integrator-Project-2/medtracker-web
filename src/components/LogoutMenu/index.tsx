import { Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

interface LogoutMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

export const LogoutMenu: React.FC<LogoutMenuProps> = ({ anchorEl, open, onClose }) => {
  const router = useRouter(); // Initialize the router

  const handleLogout = () => {
    localStorage.removeItem('token'); // Replace 'token' with the actual key used for your authentication token
    onClose(); // Close the menu
    router.push('/login'); // Redirect to login page (or home page as necessary)
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Logout option */}
    </Menu>
  );
};
