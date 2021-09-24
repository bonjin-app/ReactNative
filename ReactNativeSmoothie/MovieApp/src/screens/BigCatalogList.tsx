import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import BigCatalog from './BigCatalog';

const Container = styled.View`
    height: 300px;
    margin-bottom: 8px;
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

const BigCatalogList = ({ url, onPress }: Props) => {
    
    const [data, setData] = useState<Array<IMovie>>([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json.data.movies);
            })
            .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <Container>
            <FlatList
                horizontal
                pagingEnabled
                data={data}
                keyExtractor={(item, index) => {
                    return `bigScreen-${index}`;
                }}
                renderItem={({ item, index }) => (
                    <BigCatalog
                        id={(item as IMovie).id}
                        image={(item as IMovie).large_cover_image}
                        year={(item as IMovie).year}
                        title={(item as IMovie).title}
                        genres={(item as IMovie).genres}
                        onPress={onPress}
                    />
                )}
            />
        </Container>
    )
}

export default BigCatalogList
