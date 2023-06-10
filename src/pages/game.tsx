import React from 'react'
import MainGame from '@/components/game/MainGame'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

type Props = {}

function game({ }: Props) {
    return (
        <div>
            <MainGame />
        </div>
    )
}

export default game