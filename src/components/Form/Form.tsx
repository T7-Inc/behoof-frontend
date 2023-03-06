import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks';
import { setProduct } from '../../store/slices/productSlice';
import { IProduct } from '../../interface';
import styl from './form.module.scss';

const Form:FC = () => {
    const {
        handleSubmit, reset, register, formState: { errors },
    } = useForm<IProduct>();

    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const submit:SubmitHandler<IProduct> = (product) => {
        dispatch(setProduct({ product }));
        reset();
    };

    return (
        <div className={styl.formMain}>
            {!open && <button onClick={() => {
                setOpen(!open);
            }}>Add product</button>}

            {open && (<div className={styl.popup}>
                <AiOutlinePlusCircle onClick={() => { setOpen(!open); }} size={35} className={styl.plus}/>
                <form onSubmit={handleSubmit(submit)}>
                    <h2>Add product</h2>
                    <div className={styl.error}><input type="text" placeholder={'Enter Name'} {...register(
                        'name',
                        { required: 'This is required.', maxLength: 25 },
                    )}/>

                    <ErrorMessage errors={errors} name={'name'}
                        render={({ message }) => <p>{message}</p>}/></div>
                    <div className={styl.error}><input type="text" placeholder={'Enter Weight'} {...register(
                        'weight',
                        { required: 'This is required.', maxLength: 25 },
                    )}/>
                    <ErrorMessage errors={errors}
                        name={'weight'} render={({ message }) => <p>{message}</p>}/></div>

                    <div className={styl.error}><input placeholder={'Enter imgUrl'} type="text" {...register(
                        'imageUrl',
                        { required: 'This is required.' },
                    )}/>
                    <ErrorMessage errors={errors} name={'imageUrl'}
                        render={({ message }) => <p>{message}</p>}/></div>

                    <div className={styl.error}><input type="number" placeholder={'Enter Count'} {...register(
                        'count',
                        { required: 'This is required.', maxLength: 25, valueAsNumber: true },
                    )}/>
                    <ErrorMessage errors={errors} name={'count'}
                        render={({ message }) => <p>{message}</p>}/></div>

                    <div className={styl.error}><input type="number" placeholder={'Enter Width'}{...register(
                        'size.width',
                        { valueAsNumber: true, required: 'This is required.', maxLength: 30 },
                    )}/>
                    <ErrorMessage errors={errors} name={'size.width'}
                        render={({ message }) => <p>{message}</p>}/></div>

                    <div className={styl.error}><input
                        type="number" placeholder={'Enter Height'} {...register(
                            'size.height',
                            { valueAsNumber: true, required: 'This is required.', maxLength: 30 },
                        )}/>
                    <ErrorMessage errors={errors} name={'size.height'}
                        render={({ message }) => <p>{message}</p>}/></div>

                    <div className={styl.error}><input placeholder={'Enter Price'} type="number" {...register(
                        'price',
                        { valueAsNumber: true, required: 'This is required.', max: 999999 },
                    )}/>
                    <ErrorMessage errors={errors} name={'price'}
                        render={({ message }) => <p>{message}</p>}/></div>

                    <div className={styl.error}><input type="number" placeholder={'Enter Rate'}{...register(
                        'rate',
                        {
                            valueAsNumber: true,
                            required: 'This is required.',
                            max: { value: 5, message: 'Max number is 5' },
                            min: { value: 0, message: 'Min number is 0' },
                        },
                    )}/>
                    <ErrorMessage errors={errors} name={'rate'}
                        render={({ message }) => <p>{message}</p>}/></div>

                    <button>Save</button>
                </form>
            </div>)}
        </div>
    );
};

export { Form };
