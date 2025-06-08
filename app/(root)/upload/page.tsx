'use client'
import { ChangeEvent, useState } from 'react'
import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'

export default function Page() {
        const [error, setError] = useState<string | null>(null)
        const [formData, setFormData] = useState({
                title: '',
                description: '',
                visibility: 'public',
        })
        const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { name, value } = e.target
                setFormData((prevState) => ({
                        ...prevState,
                        [name]: value,
                }))
        }
        return (
                <main className='wrapper-md upload-page'>
                        <h1>Upload a video</h1>
                        {error && <div className='error-field'>{error}</div>}
                        <form className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5'>
                                <FormField
                                        id='descriptioon'
                                        label='Description'
                                        placeholder='Descrive what this video is about'
                                        value={formData.description}
                                        as='textarea'
                                        onChange={handleInputChange}
                                />
                                <FileInput />
                        </form>
                </main>
        )
}
