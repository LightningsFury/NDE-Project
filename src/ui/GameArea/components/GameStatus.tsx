import React, {FunctionComponent} from 'react'

export interface GameStatusProps {
    status: string;
}

export const GameStatus: FunctionComponent<GameStatusProps> = ({status}: GameStatusProps) => {
    return (<p>
        {status}
    </p>)
}