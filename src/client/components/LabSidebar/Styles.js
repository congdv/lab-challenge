import styled from 'styled-components';

export const Sidebar = styled.aside`
    z-index: 75;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    height: 100vh;
    width: 380px;
    transition: all 0.1s;
    background-color: #f9fafb;
    padding: 0 20px;
    overflow: hidden;
    &:hover {
        box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
    }
    .brand {
        padding: 30px 20px;
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
    }
`;

export const SearchInput = styled.div`
    height: 40px;
    input {
        padding: 10px 0 10px 32px;
        border: none;
        border-bottom: 2px solid #5d6063;
        background: #fff;
        font-size: 1.2rem;
        border-radius: 4px;
        width: 100%;
        &:focus,
        &:hover {
            box-shadow: none;
            border: none;
            border-bottom: 1px solid #5d6063;
            background: #fff;
        }
    }
    img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 125px;
        left: 25px;
    }
`;
