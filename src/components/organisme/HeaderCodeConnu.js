import React from 'react';

const headerCodeConnu = () => {
    return (
        <div>

            <div className='sm:grid sm:grid-cols-2'>

                <div>
                    <h1 className='text-5xl text-slate-50 text-center align-middle py-5 '>Compétence de développement</h1>
                </div>


                <a href='/' className='h-24 w-24 m-auto'><div className='h-24 w-24 m-auto bg-home hover:bg-homeFull'></div></a>



                {/*  {resize} */}
            </div>

        </div>
    );
};

export default headerCodeConnu;