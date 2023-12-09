"use client"
import {FC, ReactNode} from "react";

type WeekItemProps = {
    week: string,
    name: string | ReactNode,
    description?: string
    bgColor?: string
}

const WeekItem: FC<WeekItemProps> = ({week, name, description, bgColor}) => {
    return (
        <div className={`bg-neutral-4 py-2 px-4 flex flex-col gap-2 rounded-md ${bgColor} `}>
            <div className='accent-neutral-8'>{week} неделя</div>
            <div className='flex gap-1 flex-col md:flex-row md:gap-4'>
                <div className='font-medium'>{name}</div>
                {description && <div className='font-medium'>{description}</div>}
            </div>
        </div>
    )
}

export {WeekItem}