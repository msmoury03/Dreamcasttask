import React from 'react'
import {  useSelector } from 'react-redux'
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
    Spinner,
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";


const Usersdata = () => {

    const userDataRex = useSelector((state) => state.userReducer)

    console.log(userDataRex)

    const TABLE_HEAD = ["ID", "Name", "Email", "Mobile", "City","Action"];



    const onEditUser = () => {
        alert('Edit Button Clicked')
    }

    const onDeleteUser = () => {
        alert('DeleteUser Button Clicked')
    }

    return (
        <div>

            <div>

                
                <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {userDataRex && userDataRex?.map(
                                (val, index) => {
                                    const isLast = index === userDataRex?.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={index}>
                                            <td className={classes}>


                                                <Typography variant="small" color="blue-gray" className="font-bold">
                                                    {val?.id}
                                                </Typography>

                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-medium cursor-pointer ">
                                                    {val?.name}
                                                </Typography>
                                            </td>

                                            
                                            <td className={classes}>
                                                <Typography variant="small" color="blue" className="font-medium cursor-pointer ">
                                                    {val?.email}

                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {val?.phone}

                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {val?.address?.city} {val?.address?.zipcode}

                                                </Typography>
                                            </td>
                                            
                                           
                                            <td className={classes}>
                                                <Tooltip content="Edit">
                                                    <IconButton onClick={() => onEditUser(val.id)} variant="text" color="blue-gray">
                                                        <PencilIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip content="Delete">
                                                    <IconButton onClick={() => onDeleteUser(val.id)} variant="text" color="blue-gray">
                                                        <TrashIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>





            </div>




        </div>
    )
}

export default Usersdata