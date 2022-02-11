import styled from "styled-components";

export const RouteLink = styled.a`
    text-decoration: "underline";
    cursor: pointer;
    color: rgba(0,0,0,.9);

    &:hover {
        color: rgba(0,0,0,.9);
    }
`;

export const Logo = styled.a`
    font-weight: bold;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size:30px;
    text-decoration: none;
    white-space: nowrap;
    color:rgba(0,0,0,.9);

    &:hover {
        color: rgba(0,0,0,.9);
    }
`;

export const DetailHeader = styled.div`
    font-size: 22px;
`;
