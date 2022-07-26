import React, {useEffect, useState, useContext}  from "react";
import {Footer, Navbar} from "./index";
import {getNewsList} from "../api/api";
import {TransactionContext} from "../context/TransactionContext";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import moment from "moment";

const NewsList = () => {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {setEntity} = useContext(TransactionContext);

    const setAllNews = (p) => {
        setTimeout(async () => {
            const response = await getNewsList(p);
            setData(response.data);
            setPages(response.pages);
        }, 0);
    }

    useEffect(() => {
        setAllNews(currentPage);
        setEntity('news');
    },[currentPage])

    return (
        <div>
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="w-full mf:flex-row flex-col justify-between mt-10 md:p-20 py-12">
                <div className='flex md:px-4 xl:px-48 text-white grid grid-cols-3 gap-6'>
                    {data.map((d, index) => (
                        <Card key={index} className="mt-6 bg-indigo-900">
                            <CardHeader color="blue" className="relative">
                                <a href={`/news/${d.slug}`}>
                                    <img
                                        src={`../../images/news/${d.image}`}
                                        alt="img-blur-shadow"
                                        className="h-full w-full"
                                    />
                                </a>
                            </CardHeader>
                            <CardBody className="text-left pl-4">
                                <Typography variant="h5" className="my-2">
                                    <a href={`/news/${d.slug}`}>{d.title}</a>
                                </Typography>
                                <Typography className="my-2">
                                    {d.description}
                                </Typography>
                            </CardBody>
                            <CardFooter divider className="flex items-center justify-between py-3">
                                <Typography className="mx-4" variant="small">{d.author}</Typography>
                                <Typography variant="small" color="grey" className="flex gap-1 mr-4">
                                    {moment(d.createdOn).format('Do MMMM YYYY')}
                                </Typography>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="gradient-bg-services">
                <Footer />
            </div>
        </div>
    );
};

export default NewsList;
