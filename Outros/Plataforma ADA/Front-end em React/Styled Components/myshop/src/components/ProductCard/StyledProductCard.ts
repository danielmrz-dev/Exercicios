import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    /* gap: 1rem; */
`;

export const ProductImage = styled.img`
    width: 250px;
    height: 400px;
    object-fit: contain;
`;

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 1rem;
    min-height: 3rem;
`;

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
`;

export const Review = styled.span`
    display: flex;
    align-items: center;
    font-size: .85rem;
    & > *:first-child {
        margin-left: .25rem;
    }
    svg {
        font-size: 1rem;
    }
`;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
`

export const AddToCardButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-size: 1rem;
    padding: 1.25rem;
    svg {
        font-size: 0.7rem;
    }
`;
