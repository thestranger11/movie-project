import styled from 'styled-components';
import { colors, fonts } from './utils';
import { Constants } from './constants';

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    width: 100%;
`;

export const Title = styled.h2`
    padding: 0 10px;
    border-left: 3px solid ${colors.persianGreen};
    color: ${colors.grey};
    font-family: ${fonts.primary}, ${fonts.secondary},
        ${fonts.fallback};
    font-weight: 400;
`;

export const MoviesHorizontalList = styled.div`
    overflow-x: auto;
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    .movie-list-wrapper {
        display: inline-flex;
        margin: 0 auto;
        padding: 0;
    }
`;

export const MovieCard = styled.div`
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    margin: 15px auto;
    padding: 10px;
    width: 280px;
    ${(props) =>
        props.marginHorizontal &&
        `
        margin-left: 5px;
        margin-right: 5px;
    `}
    &>* {
        max-width: 100%;
        text-decoration: none;
    }
    h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${colors.grey};
        font-size: 18px;
        text-align: center;
        font-family: ${fonts.primary}, ${fonts.secondary},
            ${fonts.fallback};
    }
    img {
        height: 300px;
        width: 100%;
        object-fit: contain;
        display: block;
    }
    .no-image {
        width: 120px;
        margin: 0 auto;
    }
    .movie-details {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 5px;
        span {
            padding: 3px 5px;
            color: ${colors.grey};
            font-size: 15px;
            label {
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
`;

export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid ${colors.persianGreen};
    padding: 10px 2px;
    display: block;
    font-size: 18px;
    font-family: ${fonts.primary}, ${fonts.secondary},
        ${fonts.fallback};
    color: ${colors.grey};
    width: 100%;
    /* max-width: 98%; */
    background: unset;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${colors.grey};
    }
`;

export const MainMenu = styled.nav`
    background: ${colors.midnightGreen};
    width: 100%;
    margin: 0;
    padding: 0 10px;
    text-align: center;
    border-bottom: 5px solid ${colors.aquamarine};
    position: fixed;
    height: ${Constants.menuHeight}px;
    z-index: 99;
    a {
        color: ${colors.white};
        text-decoration: none;
        padding: 0 15px;
        height: 47px;
        min-height: 100%;
        max-height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover,
        &.selected {
            background: ${colors.aquamarine};
            color: ${colors.grey};
        }
    }
`;

export const Main = styled.main`
    padding-top: ${Constants.menuHeight}px;
`;

export const MovieDetailed = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: calc(100vh - ${Constants.menuHeight}px);
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 0;
    }
    .background {
        /* background-size: cover; */
        background-position: center;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        position: absolute;
        filter: blur(8px);
        -webkit-filter: blur(8px);
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        background: rgba(256, 256, 256, 0.9);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        padding: 30px 3%;
        border-radius: 10px;
        position: relative;
        width: 100%;
        max-width: 1200px;
        .image-container {
            min-width: 30%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .details {
            padding: 0 3%;
            min-width: 70%;
            box-sizing: border-box;
            h1 {
                color: ${colors.ceruleanCrayola};
                font-size: 1.8rem;
                font-family: ${fonts.primary}, ${fonts.secondary},
                    ${fonts.fallback};
            }
        }
        .movie-field {
            padding: 3px 0;
            color: dimgray;
            font-weight: 300;
            font-size: 18px;
            label {
                font-family: ${fonts.primary}, ${fonts.secondary},
                    ${fonts.fallback};
                font-weight: 700;
                color: ${colors.midnightGreen};
            }
            &.plot {
                width: 100%;
                padding: 10px 0;
            }
        }
    }
`;
