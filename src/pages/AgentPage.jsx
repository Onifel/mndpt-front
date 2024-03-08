import React from 'react';
import Agent from '../components/Agent';
import HeaderPageAgent from '../components/HeaderPageAgent';
import './Page.css';

function AgentPage() {
    return (
        <>
            <HeaderPageAgent />
            <Agent />
        </>

    );
}

export default AgentPage;