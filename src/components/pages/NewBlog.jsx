import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewBlog() {
    const [form, setForm] = useState({

        name: '',
        title: '',
        content: '',
    })
    // console.log(process.env.REACT_APP_SERVER_URL)


    const navigate = useNavigate()

 
    const handleSubmit = e => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, form)
            .then(response => {
                console.log(response.data)
                navigate('/') 
            })
            .catch(console.warn)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text'
                        id='name'
                        placeholder='name...'
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor='title'>title:</label>
                    <input 
                        type='text'
                        id='title'
                        placeholder='title'
                        value={form.title}
                        onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                    </div>
                    
                    <label htmlFor='content'>Blog:</label>
                    <input 
                        type='text'
                        id='content'
                        placeholder='content...'
                        value={form.content}
                        onChange={e => setForm({ ...form, content: e.target.value })}
                    />
                
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}