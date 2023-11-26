"use client"
import {FC} from "react";
import {Typography} from "antd";
import Image from "next/image";

const {Title, Text} = Typography

type VacancyCardProps = {
    companyName: string,
    params: Array<{ id: number, name: string }>,
    vacancyName: string,
    image: string
}

const VacancyCard: FC<VacancyCardProps> = (props) => {
    const {companyName, vacancyName, image, params} = props
    return (
        <div
            className={`w-[300px] py-2 px-3 bg-white flex flex-col gap-[25px] border rounded-md shadow-md m-5 cursor-pointer hover:shadow-xl`}>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex items-center justify-between flex-wrap'>
                    <Text strong>{companyName}</Text>
                    <div className='flex gap-3 flex-wrap'>
                        {
                            params?.map((item, index) =>
                                <Text key={index} type="secondary">{item.name}</Text>
                            )
                        }
                    </div>
                </div>
                <Title level={3} style={{margin: 0}}>{vacancyName}</Title>
            </div>
            <div>
                <Image src={`/${image}.png`} width={300} height={200} alt={image} className='rounded-md w-full'/>
            </div>
        </div>
    )
}


export {VacancyCard}