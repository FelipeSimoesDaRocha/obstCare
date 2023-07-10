// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './Home.styles';

import { DataItemCardsApi, DataItemCardsHome } from 'models';

import { getHome } from 'services/api';

// Components
import { Cards } from 'components/cards';
import { Charts } from 'components/charts';

const HomeScreen = () => {
  const [cardsData, setCardsData] = useState<DataItemCardsApi>({} as DataItemCardsApi);

  const data = [0, 10, 15, 17, 30, 40, 50];
  const labels = ['1', '5', '10', '15', '20', '25', '30'];

  const fetchData = async () => {
    const { data } = await getHome();
    setCardsData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderCards = (data: DataItemCardsApi) => {
    return Object.entries(data).map(([key, value], index) => {
      const capitalizedKey = capitalizeFirstLetter(key);
      return (
        <Cards key={index} name={capitalizedKey} data={'7'} value={value.quantity} porcentage={value.porcentage} />
      );
    });
  };

  return (
    <S.Container>
      <S.Content>
        {/* {cardsData.length > 0 &&
          cardsData.map((props, index) => (
            <Cards key={index} name={props.name} data={props.data} value={props.value} income={props.income} />
          ))} */}
        {renderCards(cardsData)}
      </S.Content>

      <S.ContentCharts>
        <Charts.NewChart data={data} labels={labels} />
        <Charts.ActivesChart data={data} labels={labels} />
        <Charts.RatiosChart data={data} labels={labels} />
        <Charts.RetentionChart data={data} labels={labels} />
      </S.ContentCharts>
    </S.Container>
  );
};

export default HomeScreen;
