import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled(Link)`
    width: 23%;
    padding-right: 15px;
`

export const Name = styled.span`
    width: 23%;
`

export const Price = styled.div`
    margin-left: 18.7%;
    margin-right: 21.5%;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`
export const Quantity = styled.div`
    display: flex;
`

export const Arrow = styled.div`
    cursor: pointer;
`

export const Value = styled.span`
    margin: 0 10px;
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`