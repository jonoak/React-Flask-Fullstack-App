import React, { useState } from 'react';
import './App.css';

function App() {
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Graphic designer');
    const [searchQuery, setSearchQuery] = useState('');
    const [file, setFile] = useState(null);
    const [fromAmount, setFromAmount] = useState(5000);
    const [toAmount, setToAmount] = useState(14.9376);

    return (
        <div className="app">
            <div className="input-group">
                <label>Search here</label>
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Free por..."
                />
            </div>
            <div className="input-group">
                <label>Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <div className="password-strength">Very weak!</div>
            </div>
            <div className="input-group">
                <label>FROM</label>
                <select value="LINK">
                    <option value="LINK">LINK</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>
                <input 
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>TO</label>
                <select value="ETH">
                    <option value="LINK">LINK</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>
                <input 
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Select role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Graphic designer">Graphic designer</option>
                    <option value="Developer">Developer</option>
                    <option value="Project manager">Project manager</option>
                </select>
            </div>
            <div className="input-group">
                <label>File upload</label>
                <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
        </div>
    );
}

export default App;
