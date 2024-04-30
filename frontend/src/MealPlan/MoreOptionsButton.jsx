import React, { useState } from 'react';
import { IconButton, Menu, MenuButton, MenuList, MenuItem, ChakraProvider } from '@chakra-ui/react';
import { FaEllipsisH } from "react-icons/fa";
import { extendTheme } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  colors: {
    brand: {
      50: '#f3f4f5',
     
    },
    
  },
});

const deletehandler=()=>{
  window.confirm("Are you sure want to delete it")
}

const MoreOptionsButton = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaEllipsisH />}
          className="bg-gray-200 rounded-full p-2"
          onClick={() => setIsOpen(!isOpen)}
        />
        <MenuList>
          <Link to={"/ucm"}><MenuItem >Edit</MenuItem></Link>
          <MenuItem onClick={deletehandler}>Delete</MenuItem>
          <MenuItem>Download</MenuItem>
        </MenuList>
      </Menu>
    </ChakraProvider>
  );
};

export default MoreOptionsButton;
