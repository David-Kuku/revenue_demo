import React from 'react'
import { invocing, link, media, store } from './assets'
import { Tooltip } from 'react-tooltip'
import './Appbar.css'

const AppBar = () => {
    const items = [
        { img: link, text: 'Link-in-Bio' },
        { img: store, text: 'Store' },
        { img: media, text: 'Media-Kit' },
        { img: invocing, text: 'Invoicing' }
    ]
    return (
        <>
            <div className='flex flex-col gap-[20px] rounded-[30px] p-4 shadow-lg'>
                {
                    items.map((item) => (
                        <>
                            <img src={item.img} alt='img' className={`${item.text} icon cursor-pointer`} />
                            <Tooltip anchorSelect={`.${item.text}`} place='right'>{item.text.replace('-', ' ')}</Tooltip>
                        </>
                    ))
                }
            </div>

        </>
    )
}

export default AppBar