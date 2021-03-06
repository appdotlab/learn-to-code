import React from 'react'
import * as icons from '@material-ui/icons';
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Sidebar = (props) => {
    const auth = useSelector(state => state.auth)

    const navItems = [
        { icon: icons.Subject, text: 'Posts', link: '/posts'},
        { icon: icons.Search, text: 'Search', link: '/search'},
        { icon: icons.MenuBook, text: 'Courses', link: '/courses'},
        { icon: icons.Code, text: 'IDE', link: '/ide'},
    ]

    auth.isLoggedIn
        ? navItems.push({ icon: icons.MeetingRoom, text: 'Logout', link: '/logout'})
        : navItems.push({ icon: icons.PersonOutline, text: 'Login', link: '/login'})

    const onSearch = () => props.searchListener(true)

    return (
        <div className='sidebar text-center py-3 px-2'>
            <div className='logo py-3'>
                <h1 className='text-center text-color-primary font-weight-medium'>{"{ }"}</h1>
            </div>

            <br></br>

            <div className='navbar-items'>
                {
                    navItems.map((item, index) => {

                        if (item.text != 'Search') {
                            return (
                                <NavLink key={index} to={{ pathname: item.link, state: {from: props.location}}} exact activeClassName='navbar-active'>
                                    <div key={index} className='navbar-item py-4'>
                                        <item.icon className="navbar-item-icon" />
                                        <span className='navbar-item-label'>{item.text}</span>
                                    </div>
                                </NavLink>
                            )
                        } else {
                            return (
                                <div key={index} onClick={() => onSearch()} key={index} className='navbar-item py-4'>
                                    <item.icon className="navbar-item-icon" />
                                    <span className='navbar-item-label'>{item.text}</span>
                                </div>
                            )
                        }
                    })
                }
                
            </div>
            <div className="navbar-items-bottom">
                <NavLink key={navItems.length + 1} to="/settings" exact activeClassName='navbar-active'>
                    <div key={navItems.length + 1} className='navbar-item py-4'>
                        <icons.Settings className="navbar-item-icon" />
                        <span className='navbar-item-label'>Settings</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar