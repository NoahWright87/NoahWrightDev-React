import { Paper } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

export default function InfoPopup({ info, children }) {
    const [showInfo, setShowInfo] = useState(false);
    const paperRef = useRef(null);

    const handleClick = () => {
        setShowInfo(!showInfo);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (paperRef.current && !paperRef.current.contains(event.target)) {
                setShowInfo(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                zIndex: 100,
            }}
        >
            <div
                style={{
                    textDecoration: 'underline',
                    textDecorationStyle: 'dashed',
                    display: 'inline',
                    cursor: 'question',
                }}
                onClick={handleClick}
            >
                {children}
            </div>
            {showInfo && (
                <div ref={paperRef}>
                    <Paper
                        sx={{
                            px: 1,
                            py: 0.25,
                            m: 0,
                            position: 'absolute',
                            zIndex: 200,
                            left: `-50%`,
                            top: `-200%`,
                            minWidth: '300px',
                            width: '200%',
                            alignItems: 'center',
                            textAlign: 'center',
                            // overflowWrap: 'break-word',
                            overflow: 'auto',
                            backgroundColor: 'info.main',
                        }}
                    >
                        {info}
                    </Paper>
                </div>
            )}
        </div>
    );
}

//     return (
//         <div
//             style={{
//                 position: 'relative',
//                 display: 'inline-block',
//                 zIndex: 100,
//             }}
//         >
//             <div
//                 style={{
//                     textDecoration: 'underline',
//                     textDecorationStyle: 'dashed',
//                     display: 'inline',
//                     cursor: 'pointer',
//                 }}
//                 onClick={handleClick}
//             >
//                 {children}
//             </div>
//             {showInfo && (
//                 <Paper
//                     style={{
//                         position: 'absolute',
//                         zIndex: 9999,
//                         top: -50,
//                         left: 0,
//                         backgroundColor: 'info.dark',
//                     }}
//                 >
//                     {info}
//                 </Paper>
//             )}
//         </div>
//     );
// }
