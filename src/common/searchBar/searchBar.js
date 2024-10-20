import React, { useContext } from 'react'
import { InputAdornment, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { UserContext } from '../../useHooks/useDarkModeContext/useDarkModeContext';

export const SearchBar = ({filter}) => {
    const dark = useContext(UserContext);
    return (
        <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            className={`bg-gray-100 dark:bg-custom-black-5 text-white`}
            rows={1}
            sx={{
                color: 'grey',
                width: filter?'50%':'20%',
                borderRadius: '15px',
                '& .MuiOutlinedInput-root': {
                    border: 'none',  // Remove the border
                    '& fieldset': {
                        border: 'none',  // Remove the border from the fieldset (outline)
                    },
                },
                '& .MuiInputBase-input': {
                    height: '0.5rem', // Adjust the actual input height
                    color: 'grey',
                    '&::placeholder': {
                        color: 'grey', // Set placeholder color in light mode
                        opacity: 1, // Override default opacity for placeholder text
                    },
                    '&:focus::placeholder': {
                        color: 'transparent', // Optional: hide placeholder on focus
                    },
                    '&:hover::placeholder': {
                        color: 'darkgray', // Optional: change color on hover
                    },
                    '&.MuiInputBase-input-dark::placeholder': {
                        color: 'darkgray', // Custom color for dark mode
                    },
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchOutlined className='dark:text-gray-600' />
                    </InputAdornment>
                ),
                endAdornment: (
                    filter &&
                    <InputAdornment position="end">
                        {
                            dark ?
                                <img src="./assests/filterDark.png" className='h-[25px] w-[40px]' alt="filter" />
                                :
                                <img src="./assests/filterLight.png" className='h-[25px] w-[40px]' alt="filter" />
                        }
                    </InputAdornment>
                ),
            }}
        />
    )
}
