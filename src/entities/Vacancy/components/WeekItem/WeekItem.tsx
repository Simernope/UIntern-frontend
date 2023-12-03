"use client"
import {FC, ReactNode} from "react";

type WeekItemProps = {
    week: string,
    name: string | ReactNode,
    description?: string
}
const WeekItem:FC<WeekItemProps> = ({week, name, description}) => {
    return (
        <div className='bg-neutral-4 py-2 px-4 flex flex-col gap-2 rounded-md'>
            <div className='accent-neutral-8'>{week} неделя</div>
            <div className='flex gap-4'>
                <div className='font-medium'>{name}</div>
                {description && <div className='font-medium'>{description}</div>}
            </div>
        </div>
    )
}

export {WeekItem}