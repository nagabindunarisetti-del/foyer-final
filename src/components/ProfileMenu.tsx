import { useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  PersonOutline,
  AssignmentOutlined,
  LocationOnOutlined,
  LogoutOutlined,
} from '@mui/icons-material';

interface MenuItemType {
  label: string;
  path: string;
  icon: string;
}

interface ProfileMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  menuItems: MenuItemType[];
  onLogout: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  '👤': <PersonOutline fontSize="small" />,
  '📦': <AssignmentOutlined fontSize="small" />,
  '📍': <LocationOnOutlined fontSize="small" />,
};

const ProfileMenu = ({
  anchorEl,
  open,
  onClose,
  menuItems,
  onLogout,
}: ProfileMenuProps) => {
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          mt: 1.5,
          minWidth: 200,
          borderRadius: 2,
        },
      }}
    >
      <Typography sx={{ px: 2, py: 1.5, fontWeight: 600, fontSize: '0.85rem', color: 'grey.600' }}>
        My Account
      </Typography>

      {menuItems.map((item) => (
        <MenuItem key={item.label} onClick={() => handleMenuItemClick(item.path)}>
          <ListItemIcon>{iconMap[item.icon]}</ListItemIcon>
          <ListItemText primary={item.label} />
        </MenuItem>
      ))}

      <Divider />

      <MenuItem onClick={onLogout} sx={{ color: 'error.main' }}>
        <ListItemIcon>
          <LogoutOutlined fontSize="small" color="error" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;