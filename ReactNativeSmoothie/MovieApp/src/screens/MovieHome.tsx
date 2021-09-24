import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components/native';
import { UserContext } from '~/contexts/User';
import BigCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const StyleButton = styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = styled.Image``;

type NavigationProp = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;
interface Props {
  navigation: NavigationProp;
}

const MovieHome = ({ navigation }: Props) => {
    
    const { logout } = useContext<IUserContext>(UserContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "MOVIE APP",
            headerTintColor: '#E70915',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#141414',
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => (
                <StyleButton
                    onPress={() => {
                        logout();
                    }} >
                    <Icon source={ require('~/assets/images/ic_logout.png')}/>
                </StyleButton>
            ),
        })
    }, [])

    useEffect(() => {
    }, [])

    return (
        <Container>
            <BigCatalogList
                url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
                onPress={(id: number) => {
                    navigation.navigate('MovieDetail', {
                        id,
                    });
                }}
            />

            <SubCatalogList
                title="최신 등록순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
                onPress={(id: number) => {
                    navigation.navigate('MovieDetail', {
                        id,
                    });
                }}
            />
            <SubCatalogList
                title="평점순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
                onPress={(id: number) => {
                navigation.navigate('MovieDetail', {
                    id,
                });
                }}
            />
            <SubCatalogList
                title="다운로드순"
                url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
                onPress={(id: number) => {
                navigation.navigate('MovieDetail', {
                    id,
                });
                }}
            />    
        </Container>
    )
}

export default MovieHome
