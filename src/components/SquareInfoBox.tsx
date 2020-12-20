import React, {CSSProperties} from 'react'
import { Box } from '@material-ui/core'

const boxStyle: CSSProperties = {
    width: '21.25rem',
    height: '19.125rem',
    padding: '1.75rem 1.75rem 5.688rem 4.875rem',
    opacity: 0,
    backgroundColor: 'var(--black)'
};

const textStyle: CSSProperties = {
    width: '11.5rem',
    height: '1.063rem',
    margin: '1.938rem 1.625rem 0 0',
    fontFamily: 'Spartan',
    fontSize: '0.938rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.2,
    letterSpacing: '1.5px',
    textAlign: 'center',
    color: 'var(--dark-seafoam)'
};

const numberStyle: CSSProperties = {
    width: "4.625rem",
    height: "3.688rem",
    marginTop: "3.5rem",
    marginRight: "5.063rem",
    marginBottom: "1.938rem",
    marginLeft: "3.438rem",
    fontFamily: "Spartan",
    fontSize: "3.25rem",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.35,
    letterSpacing: "normal",
    textAlign: "center",
    color: "var(--white)"
};

const iconStyle: CSSProperties = {
    width: "1.5rem",
    height: "1.5rem",
    marginTop: 0,
    marginRight: 0,
    marginBottom: "3.5rem",
    marginLeft: "1.625rem",
    objectFit: "contain"
}

type SquareInfoBoxProps = {
    text: string
    number: string
};

export function SquareInfoBox(props: SquareInfoBoxProps): JSX.Element {

    return (
        <Box style={boxStyle}>
            <img src="public/imgs/Component 9 – 2.svg" style={iconStyle} alt='icon' />
            <p style={numberStyle}>{props.number}</p>
            <p style={textStyle}>{props.text}</p>
        </Box>
    );
}
