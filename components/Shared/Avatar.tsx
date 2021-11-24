import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';

const FallbackAvatars = () => {
  return <Avatar src='/broken-image.jpg' sx={{ bgcolor: grey[300] }} />;
};
export default FallbackAvatars;
