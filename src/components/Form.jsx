import React, { useState } from 'react';
import { storage, database } from '../utils/firebase';

const Form = () => {

    const [itemPhoto, setItemPhoto] = useState('');
    const [sendForm, setSendForm] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const newDate = new Date().toISOString();
        const data = {
            'sale': form.get('sale'),
            'date': newDate,
            'description':  form.get('description'),
            'gender': form.get('gender'),
            'title': form.get('title'),
            'photo': itemPhoto,
            'profilePic': '',
            'userContact': '',
            'userName': '',
        }
        database.ref('items').push(data)
            .then(() => setSendForm(true))
            .catch(() => setSendForm(false))
    }

    const onChange = event => {
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date()) + '-' + file.name;
        const uploadfile = storageRef.child(name).put(file);
        uploadfile
            .then((snapshot) => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => setItemPhoto(downloadURL));
            });
    }

    return (
        <div className="Form">
            <div className="Form-container">
                <div className="Form-head">
                    <h2>SHARE YOUR CLOTHES </h2>
                </div>
                {sendForm &&
                    <div className="Form-send">
                        <span>Thanks for sharing! </span>
                    </div>
                }
                {!sendForm &&
                    <div className="Form-item">
                        <form onSubmit={handleSubmit}>
                            <input name="title" type="text" placeholder="Title" />
                            <input name="description" type="text" placeholder="Description" />
                            <select defaultValue='-1' name="sale">
                                <option disabled value="-1">Select...</option>
                                <option value={true}>On Sale</option>
                                <option value={false}>Donate</option>
                            </select>
                            <select defaultValue='-1' name="gender">
                                <option disabled value="-1">Select...</option>
                                <option value="neutral">Neutral</option>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="girl">Girl</option>
                                <option value="boy">Boy</option>
                            </select>
                            <input onChange={onChange} type="file" name="photo" />
                            <button disabled={itemPhoto===''?'disabled':''}>Submit</button>
                        </form>
                    </div>
                }
                
            </div>
        </div>
    )
};

export default Form;