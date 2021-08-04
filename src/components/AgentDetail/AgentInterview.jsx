import React from 'react';
const AgentInterview = () => {
    return (
        <div>
            <iframe
                width="100%"
                height="380"
                src="https://www.youtube.com/embed/P0NfnFYpENo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default React.memo(AgentInterview);