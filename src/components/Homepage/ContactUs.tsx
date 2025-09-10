import React from "react";
import { Colors } from "@/colors/colors";
import { Box, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import customer from '../../../public/assets/customer.png'
import arrowNext from '../../../public/assets/arrow-next.svg'

const ContactUs = () => {
    const InputStyle = styled(Box)(() => ({
        '& .MuiInput-underline:before': {
            borderBottomColor: '#C7C7C7',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#C7C7C7',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#C7C7C7',
        },
        '& .MuiInputLabel-root': {
            color: '#fff',
            width: '100%',
            fontSize: '14px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#fff',
        },
        '& .MuiTextField-root': {
            width: '100%'
        }
    }));

    return (
        <>
            <div className="bg-black p-15 flex flex-col md:flex-row justify-between text-white">
                <div className="w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
                    <div className="poppins-medium font-30">Get in touch to discuss your software vision <span style={{ color: Colors.brand200 }}>with industry experts</span></div>
                    <Box component="form">
                        <InputStyle>
                            <div className="flex flex-wrap justify-between gap-y-10">
                                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                                    <TextField label="Name" variant="standard" />
                                </div>
                                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                                    <TextField label="Email" variant="standard" />
                                </div>
                                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                                    <TextField label="Number" variant="standard" />
                                </div>
                                <div className="w-full md:w-[46%] lg:w-[46%] xl:w-[46%]">
                                    <TextField label="Country" variant="standard" />
                                </div>
                                <div className="w-[100%]">
                                    <TextField label="Company" variant="standard" />
                                </div>
                                <div className="w-[100%]">
                                    <TextField label="Message" variant="standard" />
                                </div>
                            </div>
                        </InputStyle>
                        <div className="mt-6">
                            <FormControlLabel control={
                                <Checkbox
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            color: 'gray',
                                            width: 30,
                                            height: 30,
                                            borderRadius: '5px',
                                        },
                                        '&.Mui-checked .MuiSvgIcon-root': {
                                            color: 'green',
                                        },
                                    }} />}
                                label="I want to receive news and updates once in a while"
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '14px',
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 500,
                                    },
                                }}
                            />
                        </div>
                    </Box>
                    <div className="mt-5 poppins-medium font-12" style={{ color: '#9A9A9A' }}>We will add your info to our CRM for contacting you regarding your request. For more info please consult our <span className="text-white cursor-pointer" style={{ textDecoration: 'underline' }}>privacy policy</span></div>
                    <button className="poppins-semibold py-4 mt-8 rounded-xl border-1 border-green-500 border-solid justify-self-start font-16 w-[100%]" style={{ backgroundColor: Colors.brand950 }}>
                        Send Now
                    </button>
                </div>
                <div className="mt-10 rounded-2xl p-10 justify-between grid bg-gradient-to-br from-[#177634] via-black to-black-500 w-full md:w-[45%] lg:w-[45%] xl:w-[45%]">
                    <div className="poppins-semibold font-22">What Our Customers Say</div>
                    <div className="poppins-medium leading-[200%] font-18">Innovation plays a vital role in shaping the future of businesses. Companies that focus on creativity and problem-solving are able to build stronger connections with their customers. By combining technology with user-centered design, organizations can create solutions that not only meet current needs</div>
                    <div className="flex">
                        <Image src={customer} alt="image" className="w-11 h-11 mr-3" />
                        <div>
                            <div className="poppins-semibold font-16" style={{ color: Colors.brand200 }}>Lonnie Wuckert</div>
                            <div className="poppins-medium font-12">Frontend Developer</div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="w-[75%] bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }} />
                        </div>
                        <Image src={arrowNext} alt="" className="w-10 h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;