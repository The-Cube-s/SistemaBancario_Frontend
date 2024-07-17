import React, { useState } from 'react';
import { useEditMyProfile } from '../../Shared/Hooks/Client/useEditMyProfile';

const MyProfile = () => {
    const { editProfile, error, loading } = useEditMyProfile();
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSurnameChange = (e) => setSurname(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    const handleSave = async () => {
        const fieldsToUpdate = { surname, password, email, phone };
        await editProfile(fieldsToUpdate);
    };

    return (
        <div>
            <h2>Editar Perfil</h2>
            {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
            <div>
                <label>
                    Apellido:
                    <input type="text" value={surname} onChange={handleSurnameChange} />
                </label>
            </div>
            <div>
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
            </div>
            <div>
                <label>
                    Teléfono:
                    <input type="text" value={phone} onChange={handlePhoneChange} />
                </label>
            </div>
            <button onClick={handleSave} disabled={loading}>Guardar</button>
        </div>
    );
};

export default MyProfile;