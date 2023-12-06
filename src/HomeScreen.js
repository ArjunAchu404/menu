import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChecklistIcon from '@mui/icons-material/Checklist';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MergedComponent}
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('../assets/logo.png')}
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              <Text style={{ fontSize: 20 }}>ENTE NADU</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => alert('Header Button Pressed')}>
              {/* You can add an icon or any other component here */}
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.toggleDrawer()} // Open the drawer on button press
            >
              <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};



const MergedComponent = () => {
  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['To Do List', 'Remainders', 'Family Budget', 'About Us', 'Contact', 'SignOut'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <ChecklistIcon /> :
                  (index === 1 ? <NotificationsIcon /> :
                    (index === 2 ? <CurrencyRupeeIcon /> :
                      (index === 3 ? <InfoIcon /> :
                        (index === 4 ? <CallIcon /> :
                          (index === 5 ? <ExitToAppIcon /> :
                            (index % 2 === 0 ? <HomeRoundedIcon /> : <PersonRoundedIcon />)
                          )
                        )
                      )
                    )
                  )
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* Add other items for the second list if needed */}
      </List>
    </Box>
  );

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/abcv.png')}
        style={{ flex: 1, resizeMode: 'cover' }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Van Helsing' }}>Home Screen</Text>
        </View>
      </ImageBackground>

      <View style={{ flex: -1, alignItems: 'flex-start', paddingHorizontal: 10}}>
        {['MENU'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <SwipeableDrawer
              anchor={anchor}
              open={drawerState[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
