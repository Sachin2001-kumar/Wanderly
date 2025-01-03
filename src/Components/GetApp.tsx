import React from 'react'
import Button from './Button';


const GetApp = () => {
  return (
    <section className='flexcenter w-full flex-col pb-[100px]'>
        <div className='get-app'>
            <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
                <h1 className="from-neutral-950 lg:bold xl:max-w-[320px]">Get It For Free Now </h1>
                <p className='regular-16  text-gray-900'>Available on iOS and Android</p>
                <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
                <Button
                title='App Store'
                type='button'
                icon='src\assets\apple.svg'
                variant="btn_white"
                full>
                </Button>
                <Button
                title='Play Store'
                type='button'
                icon='src\assets\android.svg'
                variant="btn_dark_green_outline"
                full>
                </Button>
            </div>
            </div>
            <div className='flex flex-1 items-center justify-end'>
                <img src='src\assets\phones.png' alt='Phone'></img>
            </div>
        </div>
    </section>
  )
}

export default GetApp;
